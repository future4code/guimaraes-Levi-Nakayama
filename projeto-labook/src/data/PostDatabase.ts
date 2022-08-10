
import { POST_TYPES } from "../enum/postTypes";
import { BaseDatabase } from "./BaseDatabase";
import { post } from "../model/post"


export class PostDatabase extends BaseDatabase {
  
  public insertPost = async (post: post) => {
    try {
      await BaseDatabase.connection.insert({
        
        id: post.id,
        photo: post.photo,
        description: post.description,
        type: post.type,
        createdAt: post.createdAt,
        author_id: post.author_id
      }).into('labook_posts');
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public findPostById = async (idPost: string)=>{
    try {
      return await BaseDatabase.connection("labook_posts").select("*").where("id", idPost)
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public findPostFriendsByUserId = async(userId: string)=>{
    try {
      return await BaseDatabase.connection("labook_friends")
      .select(
        "labook_posts.id as idPost",
        "labook_posts.photo as photo",
        "labook_posts.description as description",
        "labook_posts.type as type",
        "labook_posts.author_id as author_id",
        "labook_posts.createdAt as createdAt"
        )
      .innerJoin("labook_posts","labook_posts.author_id", "labook_friends.idUserFriend")
      .where("labook_friends.idUserSolicitante", userId)
      .orderBy("createdAt", "ASC")
    } catch (error: any) {
      return error
    }
  }
}
