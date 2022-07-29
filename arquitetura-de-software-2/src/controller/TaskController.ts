import { Request, Response } from "express";


export class TaskController {

  public createTask = async (
      req: Request,
      res: Response
   ) => {
      try {
         const input ={ 
            title: req.body.title,
            description: req.body.description,
            deadline: req.body.deadline,
            authorId: req.body.authorId,
        
        };
   
               
         
   
         res.status(201).send({ message: "Tarefa criada!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }

   
   

}