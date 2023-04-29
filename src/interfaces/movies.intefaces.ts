import { z } from 'zod';
import {
  movieRequestSchema,
  movieSchemas,
  paginationSchema,
} from '../schemas/movies.schemas';
import { DeepPartial } from 'typeorm';

export type TMovie = z.infer<typeof movieSchemas>;

export type TMovieRequest = z.infer<typeof movieRequestSchema>;

export type TMovieEditRequest = DeepPartial<TMovieRequest>;

export type TPagination = z.infer<typeof paginationSchema>;
