import { Request, Response } from "express";
import { GetPostUseCase } from "./GetPostUseCase";

export class GetPostController{
    async handle(req: Request, res: Response) {
        
        const idString = req.params.id

        const id = Number(idString)

        const getPostUseCase = new GetPostUseCase()

        const result  = await getPostUseCase.execute({ id })

        return res.json(result)
    }
}