import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
const UPLOAD_DIR = path.resolve('uploads/receipts');
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}
const fileFilter = (_req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new Error('Invalid file type. Only PDF, JPEG, PNG and WEBP are allowed.'));
    }
};
// Use memoryStorage — no disk I/O until we explicitly save the file
export const uploadReceipt = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: MAX_FILE_SIZE },
    fileFilter,
}).single('receipt');
// Call this after uploadReceipt middleware to persist the file if present
export const saveReceiptFile = (file) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const filename = `receipt-${uuidv4()}${ext}`;
    const filepath = path.join(UPLOAD_DIR, filename);
    fs.writeFileSync(filepath, file.buffer);
    return `uploads/receipts/${filename}`;
};
//# sourceMappingURL=multer.config.js.map