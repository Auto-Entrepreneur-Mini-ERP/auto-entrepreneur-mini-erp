import { DevisService } from "./devis.service.js";
import { QuoteStatus } from '../../../generated/prisma/enums.js';
const devisService = new DevisService();
export class DevisController {
    // Créer un devis
    async create(req, res) {
        try {
            const autoentrepreneurId = req.AutoEntrepreneurID;
            const devis = await devisService.create(autoentrepreneurId, req.body);
            return res.status(201).json(devis);
        }
        catch (error) {
            return res.status(500).json({
                message: "Erreur lors de la création du devis",
                error: error.message || error
            });
        }
    }
    // Récupérer tous les devis
    async getAll(req, res) {
        try {
            const autoentrepreneurId = req.AutoEntrepreneurID;
            const devis = await devisService.findAll(autoentrepreneurId);
            return res.json(devis);
        }
        catch (error) {
            return res.status(500).json({ message: "Erreur lors de la récupération des devis" });
        }
    }
    // Récupérer un devis par ID
    async getById(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID manquant" });
        }
        const devis = await devisService.findById(id);
        if (!devis) {
            return res.status(404).json({ message: "Devis introuvable" });
        }
        return res.json(devis);
    }
    // Modifier un devis
    async update(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID manquant" });
        }
        const devis = await devisService.update(id, {
            ...req.body,
            validityDate: req.body.validityDate
                ? new Date(req.body.validityDate)
                : undefined,
        });
        return res.json(devis);
    }
    // Supprimer un devis
    async delete(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID manquant" });
        }
        await devisService.delete(id);
        return res.status(204).send();
    }
    // Envoyer un devis
    async downloadQuote(req, res) {
        const { id } = req.params;
        const { pdf, quoteNumber } = await devisService.generatePdf(id);
        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename=DEVIS-${quoteNumber}.pdf`,
        });
        res.send(pdf);
    }
    // Accepter un devis
    async accepter(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID manquant" });
        }
        const devis = await devisService.changeStatus(id, QuoteStatus.ACCEPTED);
        return res.status(200).json(devis);
    }
    // Refuser un devis
    async refuser(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID manquant" });
        }
        const devis = await devisService.changeStatus(id, QuoteStatus.REJECTED);
        return res.json(devis);
    }
}
//# sourceMappingURL=devis.controller.js.map