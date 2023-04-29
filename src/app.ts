import 'express-async-errors';
import 'reflect-metadata';
import express, { Application, json } from 'express';
import { handleErrors } from './error';
import { moviesRouters } from './routers/movies.routers';

const app: Application = express();
app.use(json());

app.use('/movies', moviesRouters);

app.use(handleErrors);

export default app;
