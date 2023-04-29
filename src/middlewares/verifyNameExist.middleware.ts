import { Request, Response, NextFunction } from 'express';
import { Repository } from 'typeorm';
import { Movie } from '../entities';
import { AppDataSource } from '../data-source';
import { AppError } from '../error';

export const verifyNameExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { body } = req;

  const repository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const data: Movie[] = await repository.find();

  const getByName: Movie | undefined = data.find(
    (movie: Movie) => movie.name === body.name
  );

  if (getByName) throw new AppError('Movie already exists.', 409);

  next();
};
