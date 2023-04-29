import { Request, Response } from 'express';
import { patchMovieService } from '../services/patchMovieService';

export const patchMovieCotrollers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { params, body } = req;

  const movie = await patchMovieService(Number(params.id), body);

  return res.status(200).json(movie);
};
