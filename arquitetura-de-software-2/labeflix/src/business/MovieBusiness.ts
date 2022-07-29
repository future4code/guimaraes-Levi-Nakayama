import { MovieDatabase } from "../data/MovieDataBase";


export class MovieBusiness {
    public createMovie = async (input: any) => {
       try {
         const { title, description, year, type  } = input;
     
         if (!title || !description || !year || !type) {
           throw new Error(
             'Preencha corretamente.'
           );
         }
     
         const id: string = Date.now().toString()
     
         const movieDatabase = new MovieDatabase();
         await movieDatabase.insertMovie({
           id,
           title,
           description,
           year,
           type,
         });
       } catch (error: any) {
         throw new Error(error.message);
       }
     };
    
    }
    
    