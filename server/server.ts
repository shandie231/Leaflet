import express, {Express, Request, Response } from 'express';
import cors from 'cors';
import mysql from 'mysql';
import path from 'path';
import jobRouter from './routes/jobRouter';


const app: Express = express();
const PORT =  process.env.PORT|| 3000;
//boiler plater - enable cors, allow for json formatted data and url encoded. Use ../build for server-side rendering
app.use(cors({origin: `http://localhost:8080`, credentials: true} ));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.resolve(__dirname, '../build')));







app.get('/job', jobRouter);

app.get('/favicon.ico', (req: Request, res: Response) => {
  return res.status(401);
})
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
});//

//
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})