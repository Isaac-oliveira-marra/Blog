import { Request, Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";

export class DeletePostController {
    async handle(req: Request,  res: Response) {        
        const idString = req.params.id

        const id = Number(idString)

        const deletePostUseCase = new DeletePostUseCase()

        const result = await deletePostUseCase.execute({ id })

        return res.json(result)
    }
}