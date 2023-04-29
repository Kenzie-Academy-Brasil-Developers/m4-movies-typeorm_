import { Request, Response } from 'express';
import { deleteMovieServices } from '../services/deleteMovie.services';

export const deleteMovieControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { params } = req;

  await deleteMovieServices(Number(params.id));

  return res.status(204).send();
};
