import { Request, Response } from "express";
import { DeleteContatoUseCase } from "./DeleteContatoUseCase";

export class DeleteContatoController {
    async handle(req: Request,  res: Response) {        
        const idString = req.params.id

        const id = Number(idString)

        const deleteContatoUseCase = new DeleteContatoUseCase()

        const result = await deleteContatoUseCase.execute({ id })

        return res.json(result)
    }
}