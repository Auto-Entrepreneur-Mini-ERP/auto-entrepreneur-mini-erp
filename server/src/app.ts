import express from "express";
import { prisma } from "./lib/prisma.js";

const app = express();

app.get('/', async (req: express.Request, res: express.Response) => {
    const users = await prisma.test.findMany()
    res.status(200).json({
        message: 'Hello',
        users
    })
});

export default app;