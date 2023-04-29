import { Request, Response } from 'express';
import { getMoviesServices } from '../services/getMovies.services';
import { TPagination } from '../interfaces/movies.intefaces';

export const getMoviesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { page, perPage, sort, order } = req.query;

  const data: TPagination = await getMoviesServices(
    Number(page),
    Number(perPage),
    sort,
    order
  );

  return res.status(200).json(data);
};
