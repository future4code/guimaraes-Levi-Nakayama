import { Request, Response } from "express";
import { connection } from "../connection";


export default async function createProduct(
    req: Request,
    res: Response
): Promise <void> {

   try {
    

    const { user_id, product_id, quantity, total_price } = req.body

    await connection("labecommerce_purchase")
    .insert({user_id, product_id, quantity, total_price})

    res.status(201).end()

   } catch (error: any) {

    res.status(500).end()
   }
    
}