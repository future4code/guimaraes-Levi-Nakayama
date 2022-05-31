import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { usuario } from './usuario';


const app = express()

app.use(express.json())

app.use(cors())


//ex1

app.get('/' , (req: Request, res: Response) => {

    res.status(200).send("Sem caô.")

})

//ex2

app.post('/cadastro' , (req: Request, res: Response) => {
    console.log(req.body)
    console.log(req.query)
    console.log(req.headers)
    res.status(200).send("Usuário cadastrado!")

})

//ex3

app.get('/usuario' , (req: Request, res: Response) => {

    res.status(200).send("Usuário encontrado.")
})

//ex6
//coloquei tudo dentro do mesmo array, os pots, pois para acessar fica mais fácil.

//ex8
app.get('/post', (req: Request, res: Response)=> {

    try{

    const postID = Number(req.query.id)    
    let postUsuario: {}[] = []

    for(let element of usuario){
        for(let post of element.post){
            if(post.id === postID){
                postUsuario.push(usuario)


            }
        }
    }

    res.status(200).send(postUsuario)
    }
    catch(error){
        res.status(400).end("nada encontrado.")
    }
})









app.listen(3003,() => {
    console.log("servidor acordou.")
})
