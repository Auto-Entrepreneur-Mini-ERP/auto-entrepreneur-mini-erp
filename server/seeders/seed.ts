import { prisma } from "../src/lib/prisma.js"
import fs from "fs";
import path from "path";

 
async function main() {

  const sqlFile = path.join(process.cwd(), "seeders", "seed.sql");
  const sql = fs.readFileSync(sqlFile, "utf8");

   const statements = sql
     .split(";")
     .map((s) => s.trim())
     .filter((s) => s.length > 0);
  for (const statement of statements) {
 
    await prisma.$executeRawUnsafe(statement);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });