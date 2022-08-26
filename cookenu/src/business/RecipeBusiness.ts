import { RecipeDatabase } from "../data/RecipeDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import { recipe, RecipeInputDTO } from "../model/recipe";
import { AuthenticatorData } from "../model/types";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import idGenerator from "../services/idGenerator";

export class RecipeBusiness {
  
  private recipeDB: RecipeDatabase
  constructor(){
    this.recipeDB = new RecipeDatabase
  }

  public createRecipe = async (input: RecipeInputDTO) => {
    let { description, title, date, author_id } = input
  
    if(!description ||  !title ) {

      throw new CustomError(422, "falta algo!")
    }
    
      
    const id = idGenerator.generateId()
    

    const recipe :recipe = {
     date,
     description,
     id,
     author_id,
     title
      
    }
    
    await this.recipeDB.insertRecipe(recipe)
  }

    public findRecipeById = async (id: string): Promise<recipe> => {
      try {
        return await this.recipeDB.findRecipeById(id)
      } catch (error: any) {
        throw new CustomError(400, error.message)
      }
    }

  }



