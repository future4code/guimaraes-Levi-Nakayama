import { app } from "./app";
import { Request, Response} from "express";
import { connection } from "./connection";

//ex. 02
app.get('/user/search', async (req: Request, res: Response) => {
  let errorCode = 400  

  try {
      const name = req.params.name

      const result = await connection('users')
      .select('*')
      .where('name', name)

      if(!result){
        throw new Error('Coloca algum nome pra procurar...')
      }
      
      
      res. status(200).send(result)

  } catch (error: any) {
      res.status(errorCode).send('deu ruim.')
  }
});



//ex. 01
app.post('/user', async (req: Request, res: Response) => {
  let errorCode = 400

  try {
      
      const name =  req.body.name
      const nickname = req.body.nickname
      const email =  req.body.email

      if(!name || !nickname || !email){
        throw new Error('Faltam parametros.')
      }

      await connection('TodoListUser')
      .insert({
        id: Math.random().toString(),
        name: name,
        nickname: nickname,
        email: email
      })
      
  
      res.status(200).send();
    } catch (err) {
      res.status(errorCode).send("errorCode")
    }
  });


//ex. 03

app.put('/user/edit/:id', (req: Request, res: Response) => {
    try {
        const updateUser = async (name: string, nickname: string): Promise<any> => {
            await connection('TodoListUser')
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

      const taskId = req.body.taskId
      const title = req.body.title
      const description = req.body.description
      const limitDate = req.body.limitDate
      const status = req.body.status
      const creatorUserId = req.body.id
      const creatorUserNickname = req.body.nickname


      await connection('TodoListTask')
      .insert({
        taskId: Math.random().toString(),
        title: title,
        description: description,
        limitDate: limitDate,
        status: status,
        creatorUserId: creatorUserId, 
        nickname: creatorUserNickname
        
      })
  
      res.status(200).send();
    } catch (err) {
      res.status(400).send("Deu algum erro na requisição.")
      };
    });

  //ex. 05
  /*app.get('/task/:id', (req: Request, res: Response) => {
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
})*/