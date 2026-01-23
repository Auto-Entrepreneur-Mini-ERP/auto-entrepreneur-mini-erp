import express from "express";
import { prisma } from "./lib/prisma.js";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from 'cors';

import { errorHandler } from "./utils/errorHandler.js";
import router from "./routes.js";
import cookieParser from "cookie-parser";
import articleRoutes from './routes/articles.routes.js';

const app = express();

app.get('/', async (req: express.Request, res: express.Response) => {
    const users = await prisma.user.findMany()
    res.status(200).json({
        message: 'Hello',
        users
    })
});

app.use(cors());
app.use(helmet());
app.use(morgan('common'));
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api", router);
app.use("/api", articleRoutes);

app.use(errorHandler);


export default app;