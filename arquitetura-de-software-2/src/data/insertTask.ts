import { BaseDatabase } from "./BaseDatabase";
import { task } from "../types/task";

export class TaskDatabase extends BaseDatabase {
   private taskTable = "Architecture_task"
}



export const insertTask = async (
   task: task
) => {
   await connection('Architecture_Task')
      .insert({
         id: task.id,
         title: task.title,
         description: task.description,
         deadline: task.deadline,
         author_id: task.authorId
      })
}