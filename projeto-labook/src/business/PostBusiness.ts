import { PostDatabase } from "../data/PostDatabase";
import { PostInputDTO } from "../model/postDTO";
import { generateId } from "../services/generateId";

export class PostBusiness {
    public createPost = async (input: PostInputDTO) => {
        try {
            const {photo, description, type, author_id} = input;

            if(!photo || !description || !type ) {

                throw new Error ("algum dos campos está faltando.");
            }

            const id: string = generateId()

            const postDatabase = new PostDatabase();
            await postDatabase.insertPost({
                photo,
                description,
                type,
                id: id,
                createdAt: new Date,
                author_id: author_id
            }); 
        } catch (error: any) {
            throw new Error(error.message);
        }
    };
}

