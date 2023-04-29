import { Repository } from 'typeorm';
import { Movie } from '../entities';
import { AppDataSource } from '../data-source';

export const deleteMovieServices = async (id: number): Promise<void> => {
  const repository: Repository<Movie> = AppDataSource.getRepository(Movie);

  await repository.delete({ id });
};
