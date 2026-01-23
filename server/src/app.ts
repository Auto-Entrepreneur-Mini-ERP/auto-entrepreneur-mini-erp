import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from 'cors';

import { errorHandler } from "./utils/errorHandler.js";
import router from "./routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.get('/api', async (req: express.Request, res: express.Response) => {
    return res.status(200).json({
        message: 'Hello',
    });
});

app.use(cors());
app.use(helmet());
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", router);

app.use(errorHandler);

export default app;