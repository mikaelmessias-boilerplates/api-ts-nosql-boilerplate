import cors from 'cors';
import express from 'express';
import routes from './routes';
import env from './utils/dotenv';
import mongoose from './utils/mongoose';

const app = express();

mongoose.connect(env.DATABASE_URL);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(env.PORT, () => {
  console.clear();
  console.log(`Server is listening on port ${env.PORT}\n`);
});
