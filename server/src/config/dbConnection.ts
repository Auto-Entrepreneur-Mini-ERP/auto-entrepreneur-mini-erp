import "dotenv/config";
import mysql from "mysql2/promise";

async function testDirectConnection() {
  const maxRetries = 10;
  const delay = 3000; // 3 seconds

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const connection = await mysql.createConnection({
        host: process.env.DATABASE_HOST as string,       // make sure names match docker-compose
        user: process.env.DATABASE_USER as string,
        password: process.env.DATABASE_PASSWORD as string,
        database: process.env.DATABASE_NAME as string,
        port: 3306,
      });

      await connection.end();

      console.log("✅ Direct MySQL connection successful");
      return true;
    } catch (error) {
      console.log(`⏳ Waiting for database... (${attempt}/${maxRetries})`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }

  console.error("❌ Could not connect to database after retries.");
}

export default testDirectConnection;