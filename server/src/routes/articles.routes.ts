import express from 'express';
import { produitController } from '../controllers/articles/produit.controller.js';
import { serviceController } from '../controllers/articles/service.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';


const router = express.Router();

router.use(authenticate);

router.get("/", authenticate, produitController.getProduits);

router.post('/produits', produitController.createProduit);          // [BE-ARTICLE-002]
router.get('/produits', produitController.getProduits);             // [BE-ARTICLE-004]
router.get('/produits/alertes', produitController.getProduitsAlerte); // [BE-ARTICLE-011]
router.get('/produits/:id', produitController.getProduit);
router.patch('/produits/:id', produitController.updateProduit);     // [BE-ARTICLE-006]
router.patch('/produits/:id/stock', produitController.updateProduitStock); // [BE-ARTICLE-010]
router.delete('/produits/:id', produitController.deleteProduit);    // [BE-ARTICLE-008]

router.post('/services', serviceController.createService);          // [BE-ARTICLE-003]
router.get('/services', serviceController.getServices);             // [BE-ARTICLE-005]
router.get('/services/:id', serviceController.getService);
router.patch('/services/:id', serviceController.updateService);     // [BE-ARTICLE-007]
router.delete('/services/:id', serviceController.deleteService);    // [BE-ARTICLE-009]

export default router;