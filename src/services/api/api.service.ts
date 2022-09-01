import express, { Express } from 'express';
import routes from './routes';

// express setup
const app: Express = express();

app.use(routes);

export default app;
