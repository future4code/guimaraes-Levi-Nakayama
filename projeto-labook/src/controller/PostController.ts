import { Request, Response } from "express";
import { idText } from "typescript";
import { PostBusiness } from "../business/PostBusiness";
import { POST_TYPES } from "../enum/postTypes";
import { PostInputDTO } from "../model/postDTO";
import { generateId } from "../services/generateId";

export class PostController {
  public createPost = async (req: Request, res: Response) => {
    try {
      const {id, photo, description, author_id } = req.body;

      const input: PostInputDTO = {
        id: generateId(),
        photo: photo,
        description: description,
        type: POST_TYPES.EVENT,
        createdAt: new Date,
        author_id: author_id
      };

      const postBusiness = new PostBusiness();
      await postBusiness.createPost(input);

      res.status(201).send({ message: "Post criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}