import { Request, Response, NextFunction } from 'express';
import { Repository } from 'typeorm';
import { Movie } from '../entities';
import { AppDataSource } from '../data-source';
import { AppError } from '../error';

export const verifyIdExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { params } = req;

  const repository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const data: Movie | null = await repository.findOneBy({
    id: Number(params.id),
  });

  if (!data) throw new AppError('Movie not found', 404);

  next();
};
