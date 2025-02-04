import express from "express";
import AlunosController from "../controllers/AlunosController.js";
const AlunoRouter = express.Router()


AlunoRouter.get('', AlunosController.index)
AlunoRouter.get('/cadastrar', AlunosController.cadastrar)
AlunoRouter.post('/criar', AlunosController.criar)


export default AlunoRouter