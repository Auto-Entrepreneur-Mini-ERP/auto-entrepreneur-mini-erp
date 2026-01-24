import request from 'supertest';
import app from '../../src/app.js';
import prisma from '../../src/lib/prisma.js';
import { describe, it, beforeAll, expect, afterAll } from '@jest/globals';

describe('Produits API', () => {
  let token: string;
  let autoEntrepreneurId: string;

  beforeAll(async () => {
    // Créer un auto-entrepreneur pour les tests
    const entrepreneur = await prisma.autoEntrepreneur.create({
      data: {        
        nom: 'Test',
        email: 'test@produit.com',
        password: 'hashedpassword',
        prenom: 'Entrepreneur',
        telephone: '0123456789',
        address: 'Test address',
        typeActivite: 'COMMERCE',
        tauxImposition: 25,
        ice: 'TEST123'
      }
    });
    autoEntrepreneurId = entrepreneur.id;
    
    // Login pour obtenir le token
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@produit.com',
        password: 'password123'
      });
    token = res.body.token;
  });

  afterAll(async () => {
    // Nettoyer la base de données
    await prisma.article.deleteMany();
    await prisma.autoEntrepreneur.deleteMany();
    await prisma.$disconnect();
  });

  describe('POST /api/produits', () => {
    it('devrait créer un produit avec succès', async () => {
      const res = await request(app)
        .post('/api/produits')
        .set('Authorization', `Bearer ${token}`)
        .send({
          nom: 'Produit Test',
          description: 'Description test',
          prixUnitaire: 100.50,
          quantiteStock: 50,
          seuilAlerte: 10,
          unite: 'UNITE',
          categorie: 'Electronique'
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('article');
      expect(res.body.data).toHaveProperty('produit');
    });

    it('devrait échouer sans données valides', async () => {
      const res = await request(app)
        .post('/api/produits')
        .set('Authorization', `Bearer ${token}`)
        .send({});

      expect(res.status).toBe(400);
    });
  });

  describe('GET /api/produits', () => {
    it('devrait retourner la liste des produits', async () => {
      const res = await request(app)
        .get('/api/produits')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('devrait filtrer par catégorie', async () => {
      const res = await request(app)
        .get('/api/produits?categorie=Electronique')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
    });
  });

  // ... autres tests pour les endpoints produits
});