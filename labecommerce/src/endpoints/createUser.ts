import { Request, Response } from "express";
import { users } from "../data";

export default function createUser (
    req: Request,
    res: Response
): void {

    const {name, email, password} = req.body

    users.push({
        id: Date.now(),
        name,
        email,
        password
    })

    res.status(201).send()
}