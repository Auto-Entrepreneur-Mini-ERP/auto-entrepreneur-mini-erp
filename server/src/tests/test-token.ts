import dotenv from "dotenv";
dotenv.config();



import jwt from "jsonwebtoken"

const payload = {
  id: 1,
  email: "test@example.com"
}

const secret = process.env.JWT_SECRET

if (!secret) {
  throw new Error("JWT_SECRET not found in .env")
}

const token = jwt.sign(payload, secret, { expiresIn: "1h" })

console.log(token)
