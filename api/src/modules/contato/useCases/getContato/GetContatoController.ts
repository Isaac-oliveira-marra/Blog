import { Request, Response } from "express";
import { GetContatoUseCase } from "./GetContatoUseCase";

export class GetContatoController{
    async handle(req: Request, res: Response) {
        const { email } = req.body

        const getContatoUseCase = new GetContatoUseCase()

        const result  = await getContatoUseCase.execute({email})

        return res.json(result)
    }
}