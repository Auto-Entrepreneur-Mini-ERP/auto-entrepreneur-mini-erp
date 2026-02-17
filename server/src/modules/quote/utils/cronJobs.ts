import { QuoteStatus } from "../../../../generated/prisma/enums.js";
import { prisma } from "../../../lib/prisma.js";

// Fonction pour expirer un devis spécifique
export const setQuoteStatusAfterExpired = async (quoteId: string) => {
  await prisma.quote.update({
    where: { id: quoteId },
    data: { status: QuoteStatus.EXPIRED },
  });
};

// Fonction pour vérifier tous les devis et expirer ceux dépassés
export const checkAndExpireQuotes = async () => {
  const today = new Date();

  await prisma.quote.updateMany({
    where: {
      validityDate: { lt: today },
      status: QuoteStatus.SENT,
    },
    data: { status: QuoteStatus.EXPIRED },
  });
};
