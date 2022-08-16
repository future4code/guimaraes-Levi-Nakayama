import { Friends } from "../model/friends";
import { BaseDatabase } from "./BaseDatabase";


export class FriendsDatabase extends BaseDatabase {
  public insertFriends = async (friends: Friends) => {
    try {
      await BaseDatabase.connection.insert({        
        id: friends.id,
        idUserSolicitante: friends.idUserSolicitante,
        idUserFriend: friends.idUserFriend,
        createdAt: friends.createdAt,
      }).into('labook_friends');
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public async validatedFriends(idUserSolicitante: string):Promise<boolean>{
    try {

      let result = false
      const friends = await BaseDatabase.connection("labook_friends").where("idUserSolicitante", idUserSolicitante)
      
      if(friends.length > 0){
        result = true
      }

      if(friends.length === 0){
        result = false
      }

      
      if(friends.length === undefined){
        result = false
      }      

      return result
      
    } catch (error: any) {
      return error
    }
  }

  public deleteFriends = async (idUserSolicitante: string)=>{
    try {
        const result = await BaseDatabase.connection("labook_friends").where("idUserSolicitante", idUserSolicitante ).del()
        return result
    } catch (error: any) {
        throw new Error(error.message);
    }
  }

  public allFriends = async ()=>{
    try {
      return await BaseDatabase.connection("labook_friends").select("*")
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
