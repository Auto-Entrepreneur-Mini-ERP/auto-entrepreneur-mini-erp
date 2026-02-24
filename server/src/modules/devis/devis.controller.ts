import type { Request, Response } from "express"
import { DevisService } from "./devis.service.js"
import { QuoteStatus } from '../../../generated/prisma/enums.js';

const devisService = new DevisService()

export class DevisController {

  // Créer un devis
  async create(req: Request, res: Response) {
    try {
      const autoentrepreneurId = req.AutoEntrepreneurID;
      const devis = await devisService.create(autoentrepreneurId as string, req.body)
      return res.status(201).json(devis)
    } catch (error: any) {
      return res.status(500).json({ 
        message: "Erreur lors de la création du devis",
        error: error.message || error
      })
    }
  }

  // Récupérer tous les devis
  async getAll(req: Request, res: Response) {
    try {
      const autoentrepreneurId = req.AutoEntrepreneurID;
      const devis = await devisService.findAll(autoentrepreneurId as string,)
      return res.json(devis)
    } catch (error) {
      return res.status(500).json({ message: "Erreur lors de la récupération des devis" })
    }
  }

  // Récupérer un devis par ID
  async getById(req: Request, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: "ID manquant" })
    }

    const devis = await devisService.findById(id as string)

    if (!devis) {
      return res.status(404).json({ message: "Devis introuvable" })
    }

    return res.json(devis)
  }

  // Modifier un devis
  async update(req: Request, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: "ID manquant" })
    }

    const devis = await devisService.update(id as string, {
      ...req.body,
      validityDate: req.body.validityDate
        ? new Date(req.body.validityDate)
        : undefined,
    })

    return res.json(devis)
  }

  // Supprimer un devis
  async delete(req: Request, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: "ID manquant" })
    }

    await devisService.delete(id as string)
    return res.status(204).send()
  }

  // Envoyer un devis
  async envoyer(req: Request, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: "ID manquant" })
    }

    const devis = await devisService.changeStatus(id as string, QuoteStatus.SENT)
    return res.json(devis)
  }

  // Accepter un devis
  async accepter(req: Request, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: "ID manquant" })
    }

    const devis = await devisService.changeStatus(id as string, QuoteStatus.ACCEPTED)
    return res.status(200).json(devis);
  }

  // Refuser un devis
  async refuser(req: Request, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: "ID manquant" })
    }

    const devis = await devisService.changeStatus(id as string, QuoteStatus.REJECTED)
    return res.json(devis)
  }
}
