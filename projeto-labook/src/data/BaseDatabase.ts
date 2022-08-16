import express from "express"
import dotenv from "dotenv"
import knex from "knex"
import cors from "cors"

dotenv.config()

export class BaseDatabase {

    protected static connection = knex({
       client: 'mysql',
       connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_SCHEMA,
          port: 3306,
          multipleStatements: true
       }
    })
 
 }
 

export const app = express()
app.use(express.json())
app.use(cors())