import prisma from '../../lib/prisma.js';

export class ArticleService {
  
  // Méthodes communes aux produits et services
  async findArticlesByEntrepreneur(autoEntrepreneurId: string, filters: any) {
    return prisma.article.findMany({
      where: {
        autoEntrepreneurId,
        ...filters
      },
      include: {
        produit: true,
        service: true
      }
    });
  }

  async softDeleteArticle(articleId: string, autoEntrepreneurId: string) {
    return prisma.article.update({
      where: {
        id: articleId,
        autoEntrepreneurId
      },
      data: {
        estActif: false
      }
    });
  }

}