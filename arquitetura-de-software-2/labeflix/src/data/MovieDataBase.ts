import { movie } from "../types/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
   
   private userTable = "LABEFLIX_USER"

   public insertMovie = async(
      movie: movie
   ) => {
      try {
         await MovieDatabase.connection.insert({
            id: movie.id,
            title: movie.title,
            description: movie.description,
            year: movie.year,
            type: user.type
         }).into(this.movieTable)
         
      } catch (error:any) {
         throw new Error(error.message)
      }
   
   }
}