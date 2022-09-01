import express, { Express } from 'express';
import formatError from '../../errors/format-errorr';
import routes from './routes';

// express setup
const app: Express = express();

app.use(routes);
app.use(formatError);

export default app;
