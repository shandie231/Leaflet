import express from 'express';
import { Request, Response } from 'express';
import jobController from '../controllers/jobController';

const router = express.Router();



router.post('/add', jobController.addJob, (req: Request, res: Response) => {
  res.status(200);
})


export default router;