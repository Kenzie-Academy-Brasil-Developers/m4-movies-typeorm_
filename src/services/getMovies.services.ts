import { Repository } from 'typeorm';
import { TPagination } from '../interfaces/movies.intefaces';
import { Movie } from '../entities';
import { AppDataSource } from '../data-source';
import { paginationSchema } from '../schemas/movies.schemas';

export const getMoviesServices = async (
  page: number,
  perPage: number,
  sort: any,
  order: any
): Promise<TPagination> => {
  const repository: Repository<Movie> = AppDataSource.getRepository(Movie);

  let data: Movie[] | undefined;
  const count: number = (await repository.find()).length;

  const sortOptions = ['price', 'duration'];
  const orderOptions = ['asc', 'desc'];

  if (!perPage || perPage % 1 !== 0 || perPage > 5 || perPage <= 0) perPage = 5;
  if (!page || page % 1 !== 0 || page <= 0) page = 1;
  if (!order || !orderOptions.includes(order)) order = 'asc';
  if (!sort || !sortOptions.includes(sort)) {
    sort = 'id';
    order = 'asc';
  }

  if (!sort && !order) {
    data = await repository.find({
      skip: (page - 1) * perPage,
      take: perPage,
    });
  } else {
    data = await repository.find({
      skip: (page - 1) * perPage,
      take: perPage,
      order: {
        [sort]: order,
      },
    });
  }

  let nextPage: string | null = `http://localhost:3000/movies?page=${
    page + 1
  }&perPage=${perPage}`;
  let prevPage: string | null = `http://localhost:3000/movies?page=${
    page - 1
  }&perPage=${perPage}`;

  if (page >= Math.ceil(count / perPage)) nextPage = null;
  if (page === 1) prevPage = null;

  const response: TPagination = {
    prevPage,
    nextPage,
    count,
    data,
  };

  return paginationSchema.parse(response);
};
