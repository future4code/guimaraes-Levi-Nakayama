import { Request, Response } from "express";
import { connection } from "../connection";


export default async function createProduct(
    req: Request,
    res: Response
): Promise <void> {

   try {
    const { name, price, img_url } = req.body

    await connection("labecommerce_products")
    .insert({name, price, img_url})

    res.status(201).end()

   } catch (error: any) {

    res.status(500).end()
   }
    
}