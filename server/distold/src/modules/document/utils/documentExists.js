import { prisma } from "../../../lib/prisma.js";
import { AppError } from "../../../utils/errorHandler.js";
export const documentExists = async (documentId) => {
    const documentExists = await prisma.document.findUnique({
        where: {
            id: documentId
        }
    });
    if (!documentExists)
        throw new AppError("Document with this does not exist!", 404);
};
//# sourceMappingURL=documentExists.js.map