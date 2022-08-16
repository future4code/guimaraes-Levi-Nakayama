import { Request, Response } from "express"
import { generateId } from "../services/generateId";
import { friendsInputDTO } from "../interfaces/friendsDTO";
import { FriendsBusiness } from "../business/FriendsBusiness";


export class FriendsController {
  public createFriends = async (req: Request, res: Response) => {
    try {
      const { idUserSolicitante, idUserFriend } = req.body;

      const input: friendsInputDTO = {
        id: generateId(),
        idUserSolicitante: idUserSolicitante,
        idUserFriend: idUserFriend,                
        createdAt: new Date
      };

      const friendsBusiness = new FriendsBusiness();
      await friendsBusiness.createFriends(input);

      res.status(201).send({ message: "Amizade criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public deleteFriends = async (req: Request, res: Response)=>{
    try {
        const friendsBusiness = new FriendsBusiness()
        const friends = await friendsBusiness.deleteFriends(req.params.id)
        res.status(200).send({ message: "Amizade desfeita"})
    } catch (error: any) {
        res.status(400).send(error.message);
    }
  }


  public allFriends = async (req: Request, res: Response)=>{
    try {
      const friendsBusiness = new FriendsBusiness();
      const allFriends = await friendsBusiness.allFriends()
      res.status(200).send(allFriends)
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}