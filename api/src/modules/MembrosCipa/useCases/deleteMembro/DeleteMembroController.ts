import { Request, Response } from "express";
import { DeleteMembroUseCase } from "./DeleteMembroUseCase";

export class DeleteMembroController {
    async handle(req: Request,  res: Response) {        
        const idString = req.params.id

        const id = Number(idString)

        const deleteMembroUseCase = new DeleteMembroUseCase()

        const result = await deleteMembroUseCase.execute({ id })

        return res.json(result)
    }
}