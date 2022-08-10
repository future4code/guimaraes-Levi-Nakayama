import express from "express";
import { FriendsController } from "../controller/FriendsController";

export const friendsRouter = express.Router()

const friendsController = new FriendsController()

friendsRouter.post('/create', friendsController.createFriends)
friendsRouter.get('/all', friendsController.allFriends)
friendsRouter.delete('/:id', friendsController.deleteFriends)
