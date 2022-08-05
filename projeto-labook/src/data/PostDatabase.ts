
import { POST_TYPES } from "../enum/postTypes";
import { post } from "../types/post";
import { BaseDatabase } from "./BaseDatabase";


export class PostDatabase extends BaseDatabase {
  
  public insertPost = async (post: post) => {
    try {
      await BaseDatabase.connection.insert({
        
        id: post.id,
        photo: post.photo,
        description: post.description,
        type: POST_TYPES,
        createdAt: Date,
        author_id: post.author_id
      }).into('labook_posts');
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
