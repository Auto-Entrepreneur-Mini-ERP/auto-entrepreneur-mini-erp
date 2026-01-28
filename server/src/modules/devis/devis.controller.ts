import type { Request, Response } from "express"
import { DevisService } from "./devis.service.js"
import { QuoteStatus } from '../../../generated/prisma/enums.js';

const devisService = new DevisService()

export class DevisController {

  // Créer un devis
  async create(req: Request, res: Response) {
    try {
      const devis = await devisService.create({
        ...req.body,
        issueDate: new Date(req.body.issueDate),
        validityDate: new Date(req.body.validityDate),
      })

      return res.status(201).json(devis)
    } catch (error) {
      return res.status(500).json({ message: "Erreur lors de la création du devis" })
    }
  }

  // Récupérer tous les devis
  async getAll(req: Request, res: Response) {
    try {
      const devis = await devisService.findAll()
      return res.json(devis)
    } catch (error) {
      return res.status(500).json({ message: "Erreur lors de la récupération des devis" })
    }
  }

  // Récupérer un devis par ID
  async getById(req: Request<{id: string}>, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: "ID manquant" })
    }

    const devis = await devisService.findById(id)

    if (!devis) {
      return res.status(404).json({ message: "Devis introuvable" })
    }

    return res.json(devis)
  }

  // Modifier un devis
  async update(req: Request<{id: string}>, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: "ID manquant" })
    }

    const devis = await devisService.update(id, {
      ...req.body,
      validityDate: req.body.validityDate
        ? new Date(req.body.validityDate)
        : undefined,
    })

    return res.json(devis)
  }

  // Supprimer un devis
  async delete(req: Request<{id: string}>, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: "ID manquant" })
    }

    await devisService.delete(id)
    return res.status(204).send()
  }

  // Envoyer un devis
  async envoyer(req: Request<{id: string}>, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: "ID manquant" })
    }

    const devis = await devisService.changeStatus(id, QuoteStatus.SENT)
    return res.json(devis)
  }

  // Accepter un devis
  async accepter(req: Request<{id: string}>, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: "ID manquant" })
    }

    const devis = await devisService.changeStatus(id, QuoteStatus.ACCEPTED)
    return res.json(devis)
  }

  // Refuser un devis
  async refuser(req: Request<{id: string}>, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: "ID manquant" })
    }

    const devis = await devisService.changeStatus(id, QuoteStatus.REJECTED)
    return res.json(devis)
  }
}
