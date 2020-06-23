import cors from 'cors';
import express from 'express';
import routes from './routes';
import env from './utils/dotenv';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(env.PORT);
