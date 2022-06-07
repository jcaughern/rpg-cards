import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/api/spells', (req: Request, res: Response) => {
  res.send('Server is working!');
});

export default app;
