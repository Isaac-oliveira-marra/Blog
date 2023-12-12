import { Request, Response } from "express";
import { GetMembroUseCase } from "./GetMembroUseCase";

export class GetMembroController{
    async handle(req: Request, res: Response) {
        
        const idString = req.params.id

        const id = Number(idString)

        const getMembroUseCase = new GetMembroUseCase()

        const result  = await getMembroUseCase.execute({ id })

        return res.json(result)
    }
}