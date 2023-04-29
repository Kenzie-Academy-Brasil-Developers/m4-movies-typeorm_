import app from './app';
import { AppDataSource } from './data-source';

const port = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log('Database is connected');

    app.listen(port, async () => {
      console.log(`App running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
