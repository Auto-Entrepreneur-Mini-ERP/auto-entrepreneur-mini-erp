import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client();

const s3Upload = async (file: Express.Multer.File) => {
    const param = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: 'uploads/'+ Date.now() + '-' + file.originalname,
        Body: file.buffer
    }

    return await s3.send(new PutObjectCommand(param));
};

const s3GetObj = async (name: string) => {
    
};

export const aws = {
    s3Upload
}

