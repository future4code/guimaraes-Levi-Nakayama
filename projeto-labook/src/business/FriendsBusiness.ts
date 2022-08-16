import { FriendsDatabase } from "../data/FriendsDatabase";
import { friendsInputDTO } from "../interfaces/friendsDTO";
import { generateId } from "../services/generateId";
import { validadeId } from "../services/validatedId";

export class FriendsBusiness {
    public createFriends = async (input: friendsInputDTO) => {
        try {
            const { idUserSolicitante, idUserFriend } = input;

            if(!idUserSolicitante || !idUserFriend ) {
                throw new Error ("algum dos campos está faltando.");
            }

            const friendsDatabase = new FriendsDatabase();
            await friendsDatabase.insertFriends(input); 
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    public deleteFriends = async (idUserSolicitante: string)=>{
        try {

            if(!idUserSolicitante){
                throw new Error ("Necessário informar o Id do solicitante");
            }

            if(!validadeId(idUserSolicitante)){
                throw new Error ("Id invalido");
            }

            const friendsDatabase = new FriendsDatabase()
            
            const isFriends = await friendsDatabase.validatedFriends(idUserSolicitante)

            if(isFriends){
                return await friendsDatabase.deleteFriends(idUserSolicitante)
            }

            if(!isFriends){
                throw new Error ("Não é amigo");
            }
        } catch (error: any) {
             throw new Error(error.message);
        }
    }

    public allFriends = async()=>{
        try {
           const friendsDatabase = new FriendsDatabase()
           return await friendsDatabase.allFriends()
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

