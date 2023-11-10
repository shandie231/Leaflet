import express, {Express, Request, Response } from 'express';
import path from 'path';


const app: Express = express();
const PORT =  process.env.PORT|| 3000;

app.use(express.static(path.resolve(__dirname, '../build')));

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