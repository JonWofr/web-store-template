import * as express from 'express';
import { Request, Response } from 'express';
import { router as paymentRouter } from './payments/routes';

export const app = express();

app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/payments', paymentRouter);
