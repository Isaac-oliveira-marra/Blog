import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { DeleteMembroDto } from "../../dto/deleteMembroDto";

export class DeleteMembroUseCase {

    async execute({id}: DeleteMembroDto) {
        const findMembro = await prisma.membrosCipa.findUnique({
            where: {
                id
            }
        })

        if (!findMembro) {
           throw new AppError('membro não existe', 400)
        }
 
        const deleteMembro = await prisma.membrosCipa.delete({
            where: {
                id
            }
        })
        
        return deleteMembro
    }
}

