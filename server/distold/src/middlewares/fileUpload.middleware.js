import multer from "multer";
import fs from 'fs';
import { AppError } from "../utils/errorHandler.js";
// const storage = multer.diskStorage({
//     destination: function (req: Request, file: Express.Multer.File, cb) {
//         const dir = './uploads'
//         if (!fs.existsSync(dir)) {
//             fs.mkdirSync(dir)
//         }
//         cb(null, dir);
//     },
//     filename: function (req: Request, file: Express.Multer.File, cb) {
//         const newFileName = Date.now() + '-' + file.originalname;
//         cb(null, newFileName);
//     },
// })
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
    ];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new AppError("Seuls les fichiers PDF, JPG et PNG sont autorisés", 422));
    }
};
export const upload = multer({ storage, fileFilter });
//# sourceMappingURL=fileUpload.middleware.js.map