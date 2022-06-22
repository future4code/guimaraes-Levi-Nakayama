import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import connection from "./connection";
import app from "./app";
import { Request, Response } from "express"

app.get('/test',(req, res) =>{
    res.status(200).send("ok");
}

);

//1-a resposta do RAW é feito uma interação com o banco de dados, devem ser assincronas e toda função devolve uma Promisse. Usamos o AWAIT para esperar e encerrar a comunicação com o banco de dados.

//1-b

app.get('/actor/buscarAtor', async (req: Request, res: Response) =>{
    try {
        const searchActor = async (name: string): Promise<any> => {
            const result = await connection.raw(`
              SELECT * FROM Actor WHERE name = "${name}"
            `)
            return result
          } 
    } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    });

//1-c

app.get('/actor/contarAtor', async (req: Request, res: Response) => {
    try {
        const countActors = async (gender: string): Promise<any> => {
            const result = await connection.raw(`
              SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
            `);
    } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    });


app.post('actor/criar',async (req: Request, res: Response) => {
   try {const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };} 
      catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    });



