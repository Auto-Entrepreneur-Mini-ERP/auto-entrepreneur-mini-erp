import { Prisma, PrismaClient, UniteMesure } from '../../generated/prisma/client.js';
import prisma from '../../lib/prisma.js'; 

export class ProduitService {

  async createProduit(data: {
    nom: string;
    description?: string;
    prixUnitaire: number;
    reference?: string;
    quantiteStock: number;
    seuilAlerte: number;
    unite: UniteMesure; 
    categorie: string;
    autoEntrepreneurId: string;
  }) {
    
    return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // create article
      const article = await tx.article.create({
        data: {
          nom: data.nom,
          description: data.description ?? null,
          unite: data.unite,
          categorie: data.categorie,
          autoEntrepreneurId: data.autoEntrepreneurId,
          typeArticle: 'PRODUIT'
        }
      });

      // create produit
      const produit = await tx.produit.create({
        data: {
          id: article.id,
          articleId: article.id,
          prixUnitaire: data.prixUnitaire,
          reference: data.reference ?? null,
          quantiteStock: data.quantiteStock,
          seuilAlerte: data.seuilAlerte
        }
      });

      return { article, produit };
    });
  }

  async getProduits(autoEntrepreneurId: string, filters?: any) {
    const whereClause: any = {
      autoEntrepreneurId,
      typeArticle: 'PRODUIT',
      estActif: true
    };

    if (filters?.categorie) whereClause.categorie = filters.categorie;
    if (filters?.nom) whereClause.nom = { contains: filters.nom, mode: 'insensitive' };

    return prisma.article.findMany({
      where: whereClause,
      include: { produit: true },
      orderBy: { dateCreation: 'desc' }
    });
  }

  async getProduitById(id: string, autoEntrepreneurId: string) {
    return prisma.article.findFirst({
      where: {
        id,
        autoEntrepreneurId,
        typeArticle: 'PRODUIT'
      },
      include: { produit: true }
    });
  }

  async updateProduit(
    id: string,
    autoEntrepreneurId: string,
    data: Partial<{
      nom: string;
      description: string;
      prixUnitaire: number;
      reference: string;
      quantiteStock: number;
      seuilAlerte: number;
      unite: UniteMesure;
      categorie: string;
    }>
  ) {
    return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // update Article
      const articleUpdate: any = {};
      if (data.nom !== undefined) articleUpdate.nom = data.nom;
      if (data.description !== undefined) articleUpdate.description = data.description;
      if (data.unite !== undefined) articleUpdate.unite = data.unite;
      if (data.categorie !== undefined) articleUpdate.categorie = data.categorie;

      if (Object.keys(articleUpdate).length > 0) {
        await tx.article.update({
          where: { id, autoEntrepreneurId },
          data: articleUpdate
        });
      }

      // update Produit
      const produitUpdate: any = {};
      if (data.prixUnitaire !== undefined) produitUpdate.prixUnitaire = data.prixUnitaire;
      if (data.reference !== undefined) produitUpdate.reference = data.reference;
      if (data.quantiteStock !== undefined) produitUpdate.quantiteStock = data.quantiteStock;
      if (data.seuilAlerte !== undefined) produitUpdate.seuilAlerte = data.seuilAlerte;

      if (Object.keys(produitUpdate).length > 0) {
        await tx.produit.update({
          where: { id },
          data: produitUpdate
        });
      }

      return this.getProduitById(id, autoEntrepreneurId);
    });
  }

  async updateStock(id: string, autoEntrepreneurId: string, quantite: number) {
    return prisma.produit.update({
      where: { id },
      data: { quantiteStock: { increment: quantite } },
      include: { article: true }
    });
  }

  async getProduitsAlerte(autoEntrepreneurId: string) {
    return prisma.article.findMany({
      where: {
        autoEntrepreneurId,
        typeArticle: 'PRODUIT',
        estActif: true,
        produit: { quantiteStock: { lte: 5 } } // seuil d'alerte fixé à 5
      },
      include: { produit: true }
    });
  }

  async deleteProduit(id: string, autoEntrepreneurId: string) {
    return prisma.article.update({
      where: { id, autoEntrepreneurId },
      data: { estActif: false }
    });
  }
}
