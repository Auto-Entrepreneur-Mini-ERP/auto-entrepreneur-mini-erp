import { QuoteStatus } from '../../../generated/prisma/enums.js';
import type { CreateQuoteInput, UpdateQuoteInput } from './quote.types.js';
import { prisma } from "../../lib/prisma.js";
// Assure-toi que ce fichier existe ou commente la ligne si tu n'as pas encore le cronJob
// import { checkAndExpireQuotes } from './utils/cronJobs.js'; 
import { InvoiceStatus } from '../../../generated/prisma/enums.js';
export class DevisService {

  // Créer un devis
  async create(data: CreateQuoteInput) {
    const quoteNumber = `QT-${Date.now()}`; // Génération simple ID

    return prisma.quote.create({
      data: {
        issueDate: data.issueDate,
        validityDate: data.validityDate,
        customerId: data.customerId,
        notes: data.notes ?? null,
        status: QuoteStatus.DRAFT,
        quoteLines: { create: data.lines },
        quoteNumber,
        AutoEntrepreneurId: data.AutoEntrepreneurId,
      },
      include: { quoteLines: true },
    });
  }

  // Récupérer tous les devis
  async findAll() {
    // await checkAndExpireQuotes(); // Décommente si tu as le cronjob
    return prisma.quote.findMany({
      include: { quoteLines: true },
      orderBy: { creationDate: 'desc' }
    });
  }

  // Récupérer par ID
  async findById(id: string) {
    return prisma.quote.findUnique({
      where: { id },
      include: { quoteLines: true },
    });
  }

  // Mettre à jour
  async update(id: string, data: UpdateQuoteInput) {
    return prisma.quote.update({
      where: { id },
      data,
      include: { quoteLines: true },
    });
  }

  // Supprimer
  async delete(id: string) {
    return prisma.quote.delete({ where: { id } });
  }

  // Changer le statut (Envoyer, Accepter, Refuser)
  async changeStatus(id: string, status: QuoteStatus) {
    return prisma.quote.update({
      where: { id },
      data: { status },
      include: { quoteLines: true },
    });
  }

  // Fonction pour forcer l'expiration manuellement (Test)
  async expireQuote(id: string) {
    return prisma.quote.update({
      where: { id },
      data: { status: QuoteStatus.EXPIRED },
    });
  }





//partie de convertir devis en facture 

  // --- NOUVELLE MÉTHODE DE CONVERSION ---
  async convertToInvoice(quoteId: string) {
    // 1. Récupérer le devis complet
    const quote = await prisma.quote.findUnique({
      where: { id: quoteId },
      include: { quoteLines: true },
    });

    if (!quote) {
      throw new Error("Devis introuvable");
    }

    if (quote.invoiceId) {
      throw new Error("Ce devis a déjà été converti en facture.");
    }

    // 2. Transaction pour tout créer d'un coup
    return prisma.$transaction(async (tx:any) => {
      
      const invoiceNumber = `INV-${Date.now()}`; // Génération simple ID
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 30); // Date d'échéance +30 jours

      // Création de la facture
      const newInvoice = await tx.invoice.create({
        data: {
          invoiceNumber,
          issueDate: new Date(),
          dueDate: dueDate,
          status: InvoiceStatus.DRAFT, // Commence en brouillon
          
          // Transfert des montants
          subtotal: quote.subtotal,
          totalAmount: quote.totalAmount,
          // Important : Le reste à payer est égal au total au début
          remainingAmount: quote.totalAmount, 
          paidAmount: 0,
          
          notes: quote.notes,
          
          // Relations
          AutoEntrepreneurId: quote.AutoEntrepreneurId,
          customerId: quote.customerId,
          quoteId: quote.id,

          // Duplication des lignes
          invoiceLines: {
            create: quote.quoteLines.map((line: any) => ({
              lineType: line.lineType,
              description: line.description,
              quantity: line.quantity,
              unitPrice: line.unitPrice,
              totalPrice: line.totalPrice,
              order: line.order,
              // Correction des types : null -> undefined pour Prisma create
              productId: line.productId ?? undefined,
              serviceId: line.serviceId ?? undefined
            }))
          }
        },
        include: { invoiceLines: true }
      });

      // Mise à jour du statut du devis
      await tx.quote.update({
        where: { id: quote.id },
        data: { 
          status: QuoteStatus.CONVERTED,
          invoiceId: newInvoice.id 
        }
      });

      return newInvoice;
    });
  }




 
}







