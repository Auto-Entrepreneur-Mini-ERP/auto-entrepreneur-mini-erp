import request from 'supertest';
import app from '../../src/app.js';
import { describe, it, beforeAll, expect } from '@jest/globals';

describe('Services API', () => {
  let token: string;

  beforeAll(async () => {
    // Setup similaire aux tests produits
    token = 'test-token-value'; // Replace with actual token from auth endpoint
  });

  describe('POST /api/services', () => {
    it('devrait créer un service avec tarif horaire', async () => {
      const res = await request(app)
        .post('/api/services')
        .set('Authorization', `Bearer ${token}`)
        .send({
          nom: 'Consultation',
          description: 'Consultation technique',
          tarifHoraire: 80,
          unite: 'HEURE',
          categorie: 'Consulting'
        });

      expect(res.status).toBe(201);
    });

    it('devrait échouer sans tarif', async () => {
      const res = await request(app)
        .post('/api/services')
        .set('Authorization', `Bearer ${token}`)
        .send({
          nom: 'Service sans tarif',
          unite: 'UNITE',
          categorie: 'Test'
        });

      expect(res.status).toBe(400);
    });
  });

  // ... autres tests pour les endpoints services
});

