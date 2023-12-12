import { prisma } from "../../../../prisma/client";
import { UpdateMembroDto } from "../../dto/updateMembroDto";

export class UpdateMembroUseCase {
    async execute({id, imagem, nome}: UpdateMembroDto) {
        const membro = await prisma.membrosCipa.findUnique({
            where: {
                id
            }
        })

        if (!membro) {
          return 'membro nao existe'
        }
 
        const updateMembro = await prisma.membrosCipa.update({
            where: {
                id
            },
            data: {
                nome,
                imagem
            }
        })
        
        return updateMembro
    }
}

