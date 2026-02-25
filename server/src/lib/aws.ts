import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import path from "path";
import { v4 as uuid } from "uuid";

// const s3 = new S3Client();
const s3 = new S3Client({
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
});

const s3Upload = async (file: Express.Multer.File) => {

  const ext = path.extname(file.originalname);

  // Remove extension from original name
  const baseName = path
    .basename(file.originalname, ext)
    .replace(/\s+/g, "-")          
    .replace(/[^a-zA-Z0-9-_]/g, "") 
    .toLowerCase();

  const fileKey = `uploads/${uuid()}-${baseName}${ext}`;

  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileKey,
    Body: file.buffer
  }

  await s3.send(new PutObjectCommand(param));

  const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;
  return fileUrl;
};


export const aws = {
  s3Upload
}

