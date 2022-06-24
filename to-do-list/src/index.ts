import { app } from "./app";
import { Request, Response} from "express";


//ex. 01
app.post('/user', async (req: Request, res: Response) => {
    try {
      await createUser(
        req.body.name,
        req.body.nickname,
        req.body.email,
    );
  
      res.status(200).send();
    } catch (err) {
      res.status(400).send({
        res.status(400).send("Deu algum erro na requisição.")
      });
    }
  });

//ex. 02
app.get('/user/search', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = Number(req.params.id)

        const idFiltered = user.filter((u) => {
            if(u.id === id){
                return u
            }
        })

        if(idFiltered.length === 0){
            errorCode = 404
            throw new Error("Id não consta no banco de Dados");
        }

        res. status(200).send(idFiltered)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//ex. 03

app.put('/user/edit/:id', (req: Request, res: Response) => {
    try {
        const updateUser = async (name: string, nickname: string): Promise<any> => {
            await connection("User")
              .update({
                nickname: nickname,
              })
              .where("name", name);
          };
    } catch (error: any) {
        res.status(400).send("Deu algum erro na requisição.")
    }
})

//ex. 04
app.post('/task', async (req: Request, res: Response) => {
    try {
      await createUser(
        req.body.title,
        req.body.description,
        req.body.limitDate,
        req.body.creatorUserId
    );
  
      res.status(200).send();
    } catch (err) {
      res.status(400).send({
        res.status(400).send("Deu algum erro na requisição.")
      });
    }
  });

  //ex. 05
  app.get('/task/:id', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = Number(req.params.id)

        const taskFiltered = task.filter((tk) => {
            if(task.id === id){
                return tk
            }
        })

        if(taskFiltered.length === 0){
            errorCode = 404
            throw new Error("Id não consta no banco de Dados");
        }

        res. status(200).send(taskFiltered)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})