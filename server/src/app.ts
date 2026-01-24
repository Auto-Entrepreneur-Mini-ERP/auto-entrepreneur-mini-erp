import express from "express";
import { prisma } from "./lib/prisma.js";
import helmet from "helmet";
import morgan from "morgan";
import cors from 'cors';

import cookieParser from "cookie-parser";
import session from 'express-session';
import routes from './routes.js';

const app = express();

// Security middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true  // IMPORTANT for cookies
}));
app.use(morgan('dev'));

// Data parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Session configuration
app.use(session({
  name: 'auto_entrepreneur_session',
  secret: process.env.SESSION_SECRET || 'your_very_long_and_complex_session_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: 'lax'
  }
}));

// Routes
app.use('/api', routes);

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' ? 'Server error' : err.message
  });
});

export default app;