import express, { Express, Request, Response } from 'express';


const app: Express = express();

app.get('/', function (req: Request, res: Response) {
  res.send(`Hello Word` + req.body);
});

app.listen(3000);
