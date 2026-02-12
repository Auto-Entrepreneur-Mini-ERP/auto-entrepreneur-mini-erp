import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from 'cors';

import { errorHandler } from "./utils/errorHandler.js";
import router from "./routes.js";
import cookieParser from "cookie-parser";
import type { AutoEntrepreneur } from "./modules/auto-entrepreneur/auto-entrepreneur.types.js";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";

const app = express();

app.get('/api', async (req: express.Request, res: express.Response) => {
    return res.status(200).json({
        message: 'Hello',
    });
});

app.use(cors({
    origin: env.FRONT_END_URL,

}));
app.use(helmet());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8'
}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", router);

app.use(errorHandler);

export default app;