import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { DeleteContatoDto } from "../../dto/deleteContatoDto";

export class DeleteContatoUseCase {

    async execute({id}: DeleteContatoDto) {
        const findContato = await prisma.contato.findUnique({
            where: {
                id
            }
        })

        if (!findContato) {
           throw new AppError('contato não existe', 400)
        }
 
        const deleteContato = await prisma.contato.delete({
            where: {
                id
            }
        })
        
        return deleteContato
    }
}

