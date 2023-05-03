import { Request, Response } from 'express';
import { patchMovieServices } from '../services/patchMovieServices';

export const patchMovieCotrollers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { params, body } = req;

  const movie = await patchMovieServices(Number(params.id), body);

  return res.status(200).json(movie);
};
