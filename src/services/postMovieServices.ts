import { Movie } from '../entities';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { TMovieRequest, TMovie } from '../interfaces/movies.intefaces';
import { movieRequestSchema, movieSchemas } from '../schemas/movies.schemas';

export const postMovieServices = async (
  data: TMovieRequest
): Promise<TMovie> => {
  movieRequestSchema.parse(data);

  const repository: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movie: Movie = repository.create(data);

  await repository.save(movie);

  return movieSchemas.parse(movie);
};
