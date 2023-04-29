import { Router } from 'express';
import { verifyNameExist } from '../middlewares/verifyNameExist.middleware';
import { postMovieControllers } from '../controllers/postMovie.controllers';
import { getMoviesControllers } from '../controllers/getMovies.controllers';
import { verifyIdExist } from '../middlewares/vefifyIdExist.middleware';
import { patchMovieCotrollers } from '../controllers/patchMovie.controllers';
import { deleteMovieControllers } from '../controllers/deleteMovie.controllers';

export const moviesRouters = Router();

moviesRouters.post('', verifyNameExist, postMovieControllers);
moviesRouters.get('', getMoviesControllers);
moviesRouters.patch(
  '/:id',
  verifyIdExist,
  verifyNameExist,
  patchMovieCotrollers
);
moviesRouters.delete('/:id', verifyIdExist, deleteMovieControllers);
