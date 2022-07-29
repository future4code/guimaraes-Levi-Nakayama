


export class TaskBusiness {
public creatTask = async (input: any) => {
   try {
     const { title, description, deadline, authorId} = input

     if (
        !title ||
        !description ||
        !deadline ||
        !authorId
     )
     {
        throw new Error ()
     }
     }

     const id: string = Date.now().toString()
    
     
   } catch (error: any) {
     throw new Error(error.message);
   }
 };


