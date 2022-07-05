import { Request, Response } from "express";
import { connection } from "../connection";


export default async function createPurchase(
    req: Request,
    res: Response
): Promise <void> {

   try {
    
    const { user_id, product_id, quantity } = req.body

    const productValue: any = await connection("labecommerce_products")
    .select("price")
    .where("id", product_id);

    console.log("aqui foi.")

    const total_price = (Number(quantity) * productValue[0].price);

    if(!user_id || !product_id || !quantity) {
        throw new Error("Falta algum dos campos.");
        
    }

    const newPurchase = await connection("labecommerce_purchases")
    .insert({
        user_id,
        product_id,
        quantity,
        total_price
    });

    res.status(201).end()

   } catch (error: any) {

    res.status(500).send(error)
   }
    
}