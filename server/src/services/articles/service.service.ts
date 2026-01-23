import prisma from '../../lib/prisma.js';
import { ArticleService } from './article.service.js';

export enum UniteMesure {
  UNITE = "UNITE",
  KILOGRAMME = "KILOGRAMME",
  LITRE = "LITRE",
  METRE = "METRE",
  HEURE = "HEURE",
  JOUR = "JOUR",
}


export class ServiceService extends ArticleService {
  deleteService: any;
  checkArticleUsage(id: string) {
      throw new Error('Method not implemented.');
  }
  
  async createService(data: {
    nom: string;
  description?: string | null;
  tarifHoraire?: number | null;
  tarifFixe?: number | null;
  dureeEstimee?: number | null;
  unite: UniteMesure;
  categorie: string;
  autoEntrepreneurId: string;
  }) {
    if (!data.tarifHoraire && !data.tarifFixe) {
      throw new Error('Au moins un tarif (horaire ou fixe) est requis');
    }

    return prisma.$transaction(async (tx) => {
      // Créer l'article
      const article = await tx.article.create({
        data: {
          nom: data.nom,
          description: data.description ?? null,
          unite: data.unite,
          categorie: data.categorie,
          autoEntrepreneurId: data.autoEntrepreneurId,
          typeArticle: 'SERVICE'
        }
      });

      // Créer le service
      const service = await tx.service.create({
        data: {
           id: article.id,
           articleId: article.id,
           tarifHoraire: data.tarifHoraire ?? null,
           tarifFixe: data.tarifFixe ?? null,
           dureeEstimee: data.dureeEstimee ?? null
        }
      });

      return { article, service };
    });
  }

  async getServices(autoEntrepreneurId: string, filters?: any) {
    return prisma.article.findMany({
      where: {
        autoEntrepreneurId,
        typeArticle: 'SERVICE',
        estActif: true,
        ...filters
      },
      include: {
        service: true
      },
      orderBy: {
        dateCreation: 'desc'
      }
    });
  }

  async updateService(
    id: string,
    autoEntrepreneurId: string,
    data: Partial<{
      nom: string;
      description: string;
      tarifHoraire: number;
      tarifFixe: number;
      dureeEstimee: number;
      unite: UniteMesure;
      categorie: string;
    }>
  ) {
    return prisma.$transaction(async (tx) => {
      // Mettre à jour l'article
      const articleUpdateData: any = {};
      if (data.nom !== undefined) articleUpdateData.nom = data.nom;
      if (data.description !== undefined) articleUpdateData.description = data.description;
      if (data.unite !== undefined) articleUpdateData.unite = data.unite;
      if (data.categorie !== undefined) articleUpdateData.categorie = data.categorie;

      if (Object.keys(articleUpdateData).length > 0) {
        await tx.article.update({
          where: { id, autoEntrepreneurId },
          data: articleUpdateData
        });
      }

      // Mettre à jour le service
      const serviceUpdateData: any = {};
      if (data.tarifHoraire !== undefined) serviceUpdateData.tarifHoraire = data.tarifHoraire;
      if (data.tarifFixe !== undefined) serviceUpdateData.tarifFixe = data.tarifFixe;
      if (data.dureeEstimee !== undefined) serviceUpdateData.dureeEstimee = data.dureeEstimee;

      if (Object.keys(serviceUpdateData).length > 0) {
        await tx.service.update({
          where: { id },
          data: serviceUpdateData
        });
      }

      return this.getServiceById(id, autoEntrepreneurId);
    });
  }

  async getServiceById(id: string, autoEntrepreneurId: string) {
    return prisma.article.findFirst({
      where: {
        id,
        autoEntrepreneurId,
        typeArticle: 'SERVICE'
      },
      include: {
        service: true
      }
    });
  }
}