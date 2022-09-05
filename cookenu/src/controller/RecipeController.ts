import { RecipeDatabase } from "../data/RecipeDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import { RecipeInputDTO } from "../model/recipe";
import { AuthenticatorData } from "../model/types";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import idGenerator from "../services/idGenerator";
import { recipe } from "../model/recipe";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { Request, Response} from "express";

export class RecipeController {

  private recipeBusiness: RecipeBusiness
  constructor(){
    this.recipeBusiness = new RecipeBusiness()
  }

  public createRecipe = async (req: Request, res: Response) => {
    try {
      
      const recipe: RecipeInputDTO = {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        author_id:  req.body.author_id
      }

        await this.recipeBusiness.createRecipe(recipe)

        res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }; 
  
  public findRecipeById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string
      const recipeData = await this.recipeBusiness.findRecipeById(id)
      res.status(200).send(recipeData)
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}