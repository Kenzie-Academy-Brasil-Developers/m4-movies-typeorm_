import { Repository } from 'typeorm';
import { TMovie, TMovieEditRequest } from '../interfaces/movies.intefaces';
import { Movie } from '../entities';
import { AppDataSource } from '../data-source';
import {
  movieEditRequestSchema,
  movieSchemas,
} from '../schemas/movies.schemas';

export const patchMovieService = async (
  id: number,
  data: TMovieEditRequest
): Promise<TMovie> => {
  movieEditRequestSchema.parse(data);

  const repository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie: Movie | null = await repository.findOneBy({
    id,
  });

  const NewMovie = {
    ...movie,
    ...data,
  };

  await repository.save(NewMovie);

  return movieSchemas.parse(NewMovie);
};
