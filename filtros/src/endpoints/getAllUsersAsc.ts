import { Request, Response } from "express"
import { connection } from "../data/connection"
import { account } from "../types"


export const getAllUsersAsc = async(req: Request,res: Response): Promise<void> =>{
   try {
      let name = req.query.name as string
      let sort = req.query.sort as string
      let order = req.query.order as string

      if(!sort){
         sort = "email";
      }

         
      if (order?.toUpperCase() !== "ASC" || order?.toUpperCase() !== "DESC"){
         order = "ASC";
      }

      const resultASC = await connection('aula48_exercicio')
      .where("name", "like", `${name}`)
      .orderBy(sort, order)

                 
      if(!resultASC.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(resultASC[0])
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}