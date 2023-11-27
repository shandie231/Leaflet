import { Request, Response, NextFunction } from 'express';

const jobController = {

  addJob: async ( req: Request, res: Response, next: NextFunction) => {
    try{



    }catch(err){
      return next({
        log: `Failed to add job in addJob controller`,
        status: 400,
        message: `Failed to add job`
      })
    }
  },




}

export default jobController;