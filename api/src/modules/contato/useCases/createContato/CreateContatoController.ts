import { Request, Response } from "express";
import { CreateContatoDto } from "../../dto/createContatoDto";
import { CreateContatoUseCase } from "./CreateContatoUseCase";

export class CreateContatoController {
    async handle(req: Request,  res: Response) {
        const {nome, email, assunto, descricao}: CreateContatoDto = req.body

        const createContatoUseCase = new CreateContatoUseCase()

       try {
        const result = await createContatoUseCase.execute({nome, email, assunto, descricao})
        return res.json(result)
       } catch (error) {
        return res.json(error)
       }

    }
}