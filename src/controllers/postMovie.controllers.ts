import { Request, Response } from 'express';
import { Movie } from '../entities';
import { postMovieServices } from '../services/postMovieServices';

export const postMovieControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;

  const data: Movie = await postMovieServices(body);

  return res.status(201).json(data);
};
