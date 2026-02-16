import "dotenv/config";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@prisma/client';

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST || '',
  user: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || '',
  connectionLimit: 5
});
const prisma = new PrismaClient({adapter});

prisma.$connect()
  .then(() => console.log('✅ Prisma connected to database'))
  .catch((error) => {
    console.error('❌ Failed to connect to database:', error.message);
  });

export { prisma }