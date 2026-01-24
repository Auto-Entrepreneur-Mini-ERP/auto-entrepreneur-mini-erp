import express from 'express';
import { produitController } from '../controllers/articles/produit.controller.js';
import { serviceController } from '../controllers/articles/service.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';


const router = express.Router();

router.use(authenticate);

router.get("/", authenticate, produitController.getProduits);

router.post('/produits', produitController.createProduit);          
router.get('/produits', produitController.getProduits);             
router.get('/produits/alertes', produitController.getProduitsAlerte); 
router.get('/produits/:id', produitController.getProduit);
router.patch('/produits/:id', produitController.updateProduit);     
router.patch('/produits/:id/stock', produitController.updateProduitStock); 
router.delete('/produits/:id', produitController.deleteProduit);    

router.post('/services', serviceController.createService);          
router.get('/services', serviceController.getServices);             
router.get('/services/:id', serviceController.getService);
router.patch('/services/:id', serviceController.updateService);    
router.delete('/services/:id', serviceController.deleteService);    

export default router;
