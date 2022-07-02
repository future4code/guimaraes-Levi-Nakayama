import { Request, Response } from "express";
import { connection } from "../connection";


export default async function deleteUser(
    req: Request,
    res: Response
): Promise<void>{
    try {

    const { id } = req.params
    
    await connection("labecommerce_users")
    .delete()
    .where({ id })

    res.status(200).end()

    } catch (error: any){

        res.status(500).end()

    }
}