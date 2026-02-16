import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@prisma/client';
import mysql from 'mysql2/promise';

async function testDirectConnection() {
  try {
    await mysql.createConnection({
      host: 'mysql',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'auto_entrepreneur_erp_db',
    });
    // const adapter = new PrismaMariaDb({
    //   host: process.env.DATABASE_HOST || '',
    //   user: process.env.DATABASE_USER || '',
    //   password: process.env.DATABASE_PASSWORD || '',
    //   database: process.env.DATABASE_NAME || '',
    //   connectionLimit: 5
    // });
    // new PrismaClient({adapter});
    
    console.log('✅ Direct MySQL connection successful');
  } catch (error) {
    console.error('❌ Direct MySQL connection failed:', error);
    return false;
  }
}

export default testDirectConnection;