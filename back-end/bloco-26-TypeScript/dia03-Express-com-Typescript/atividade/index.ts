import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import error from './middlewares/error';
import 'express-async-errors';
import UsersRouter from './routes/users.routes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('api funcionando')
});

app.use(UsersRouter);

app.use(error);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});