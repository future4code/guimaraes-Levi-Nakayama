import express from "express";
import { MovieController } from "../UserController";


export const movieRouter = express.Router()

const movieController = new MovieController()

movieRouter.post('/create', movieController.createMovie)