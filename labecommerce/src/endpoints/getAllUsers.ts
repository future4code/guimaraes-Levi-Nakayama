import { Request , Response} from "express"
import { connection } from "../connection"
import { labe_users } from "../type"


export default async function getAllUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {
        
        const name = req.query
    
        const user: labe_users[] = await connection("labecommerce_users")
        
        res.send(user)
    } catch (error: any) {
        res.status(500).send("Server Error")
    
    }}
    