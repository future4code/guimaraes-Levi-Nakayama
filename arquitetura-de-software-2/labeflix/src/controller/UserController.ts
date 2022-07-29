import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";



export class MovieController {

  public createMovie = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { title, description, year, type  } = req.body
   
         const input = {
            title,
            description,
            year,
            type
         }
   
         const movieBusiness = new MovieBusiness
         movieBusiness.createMovie(input)
   
         res.status(201).send({ message: "Filme criado!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }
}