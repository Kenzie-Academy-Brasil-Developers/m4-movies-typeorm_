import { z } from 'zod';

export const movieSchemas = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().optional().nullish(),
  duration: z.number().positive(),
  price: z.number().int(),
});

export const movieRequestSchema = movieSchemas.omit({ id: true });

export const movieEditRequestSchema = movieRequestSchema.deepPartial();

export const paginationSchema = z.object({
  prevPage: z.string().nullable(),
  nextPage: z.string().nullable(),
  count: z.number(),
  data: z.array(movieSchemas),
});
