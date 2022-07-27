import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";

export class UserController {

    createUser = async (
        req: Request,
        res: Response
    ) => {
        try {
            const input: any = { name: req.body.name, nickname: req.body.nickname, email: req.body.email, password: req.body.password} 

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send({ message: "Usuario Criado!"})

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}