import  type { Request, Response } from 'express';
import { DevisService } from './quote.service.js';
import { QuoteStatus } from '../../../generated/prisma/enums.js';

// Instanciation du service
const devisService = new DevisService();

export class DevisController {
  
  // Créer un devis
  async create(req: Request, res: Response) {
    try {
      console.log("Tentative de création de devis avec :", req.body);

      const devis = await devisService.create({
        ...req.body,
        // Conversion impérative des strings en objets Date pour Prisma
        issueDate: new Date(req.body.issueDate),
        validityDate: new Date(req.body.validityDate),
      });

      return res.status(201).json(devis);
    } catch (error: any) {
      console.error("❌ ERREUR CREATE QUOTE :", error);

      // Gestion spécifique des erreurs de clés étrangères (IDs introuvables)
      if (error.code === 'P2003') {
        return res.status(400).json({ 
          message: "Impossible de créer le devis : L'ID du Client ou de l'Auto-Entrepreneur est invalide ou n'existe pas.",
          detail: error.meta?.field_name 
        });
      }

      return res.status(500).json({ 
        message: "Erreur serveur lors de la création du devis", 
        error: error.message 
      });
    }
  }

  // Récupérer tous les devis
  async getAll(req: Request, res: Response) {
    try {
      const devis = await devisService.findAll();
      return res.json(devis);
    } catch (error: any) {
      console.error("Erreur getAll :", error);
      return res.status(500).json({ message: "Erreur lors de la récupération des devis" });
    }
  }

  // Récupérer un devis par ID
  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: "ID manquant" });
      }

      const devis = await devisService.findById(id as string);

      if (!devis) {
        return res.status(404).json({ message: "Devis introuvable" });
      }

      return res.json(devis);
    } catch (error: any) {
      console.error("Erreur getById :", error);
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  // Modifier un devis
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: "ID manquant" });
      }

      const updateData = {
        ...req.body,
        // On ne convertit la date que si elle est présente dans la requête
        validityDate: req.body.validityDate ? new Date(req.body.validityDate) : undefined,
      };

      const devis = await devisService.update(id as string, updateData);
      return res.json(devis);
    } catch (error: any) {
      console.error("Erreur update :", error);
      
      if (error.code === 'P2025') {
        return res.status(404).json({ message: "Devis à modifier introuvable" });
      }
      
      return res.status(500).json({ message: "Erreur lors de la mise à jour" });
    }
  }

  // Supprimer un devis
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: "ID manquant" });
      }

      await devisService.delete(id as string);
      return res.status(204).send();
    } catch (error: any) {
      console.error("Erreur delete :", error);
      if (error.code === 'P2025') {
        return res.status(404).json({ message: "Devis introuvable" });
      }
      return res.status(500).json({ message: "Erreur lors de la suppression" });
    }
  }

  // Envoyer un devis
  async envoyer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const devis = await devisService.changeStatus(id as string, QuoteStatus.SENT);
      return res.json(devis);
    } catch (error) {
      return res.status(500).json({ message: "Erreur lors du changement de statut" });
    }
  }

  // Accepter un devis
  async accepter(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const devis = await devisService.changeStatus(id as string, QuoteStatus.ACCEPTED);
      return res.json(devis);
    } catch (error) {
      return res.status(500).json({ message: "Erreur lors de l'acceptation" });
    }
  }

  // Refuser un devis
  async refuser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const devis = await devisService.changeStatus(id as string, QuoteStatus.REJECTED);
      return res.json(devis);
    } catch (error) {
      return res.status(500).json({ message: "Erreur lors du refus" });
    }
  }

  // Cronjob expirer un devis manuellement (CORRIGÉ)
  async expire(req: Request, res: Response) {
    try {
      const { id } = req.params;
      
      // Correction : Appel effectif de la méthode du service
      const devis = await devisService.expireQuote(id as string);
      
      return res.json({ message: "Devis expiré manuellement", devis });
    } catch (error) {
      console.error("Erreur expiration :", error);
      return res.status(500).json({ message: "Erreur lors de l'expiration manuelle" });
    }
  }



  // NOUVELLE MÉTHODE : Convertir en facture
  async convertirEnFacture(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: "ID manquant" });
      }

      const facture = await devisService.convertToInvoice(id as string);
      
      return res.status(201).json({
        message: "Devis converti en facture avec succès",
        facture
      });

    } catch (error: any) {
      console.error("Erreur conversion facture :", error);
      
      if (error.message === "Devis introuvable") {
        return res.status(404).json({ message: error.message });
      }
      if (error.message === "Ce devis a déjà été converti en facture.") {
        return res.status(409).json({ message: error.message }); // 409 Conflict
      }

      return res.status(500).json({ 
        message: "Erreur lors de la conversion du devis en facture",
        error: error.message 
      });
    }
  }




}