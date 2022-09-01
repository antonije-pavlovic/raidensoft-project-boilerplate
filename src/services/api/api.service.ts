import express, { Express } from 'express';
import formatError from '../../errors/format-errorr';
import routes from './routes';
import bodyParser from 'body-parser';
// express setup
const app: Express = express();

app.use(bodyParser.json());
app.use(routes);
app.use(formatError);

export default app;
