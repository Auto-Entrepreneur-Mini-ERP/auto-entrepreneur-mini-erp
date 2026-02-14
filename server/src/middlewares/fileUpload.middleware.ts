import multer from "multer";
import fs from 'fs'
import path from 'path'
import type { Request } from "express";

// const storage = multer.diskStorage({
//     destination: function(req: Request, file: Express.Multer.File, cb) {
//         const dir = './uploads'
//         if (!fs.existsSync(dir)) {
//             fs.mkdirSync(dir)
//         }
//         cb(null, dir);
//     },
//     filename: function(req: Request, file: Express.Multer.File, cb) {
//         const newFileName = Date.now() +'-'+ file.originalname;

//         cb(null, newFileName);
//     },
// })

const storage = multer.memoryStorage();

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    cb(null, true);
};


export const upload = multer({storage, fileFilter});