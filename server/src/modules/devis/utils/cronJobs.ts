import { QuoteStatus } from "../../../../generated/prisma/enums.js";
import { prisma } from "../../../lib/prisma.js";
import { AppError } from "../../../utils/errorHandler.js";

const setQuoteStatusAfterExpired = async (quoteId: string) => {
  const updatedQuote = await prisma.quote.update({
    where: {
      id: quoteId,
    },
    data: {
      status: QuoteStatus.EXPIRED,
    },
  });

  if (!updatedQuote) {
    throw new AppError("Error setting cronJob (EXPIRED)!", 400);
  }
};

export const cronJobs = {
  setQuoteStatusAfterExpired,
};
