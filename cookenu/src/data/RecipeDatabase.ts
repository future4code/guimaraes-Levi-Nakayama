import { faAudioDescription } from "@fortawesome/free-solid-svg-icons";
import { CustomError } from "../error/customError";
import { RecipeInputDTO, recipe } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  private tableName: String
  
  constructor(){
    super()
    this.tableName = "Recipe_Cookenu"
  }

  public insertRecipe = async (recipe: recipe) => {
    try {
      await RecipeDatabase.connection
        .insert({
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
          author_id: recipe.author_id,
          date: recipe.date
        })
        .into(this.tableName.toString());
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };


  public findRecipeById = async(id: string): Promise<recipe> => {
    try{
      return await RecipeDatabase.connection()
      .select("*")
      .from(this.tableName.toString())
      .where("id", "=", id ) as any
    }catch(error: any){
      throw new CustomError(400, error.message)
    }
  }
}