import { prisma } from "../../../../prisma/client";
import { GetMembroDto } from "../../dto/getMembroDto";

export class GetMembroUseCase{
    async execute ({id}: GetMembroDto) {
        const findAllMembros = await prisma.membrosCipa.findMany({})
       
        if(id) {
            const findUniqueMembrobyId = await prisma.membrosCipa.findUnique({
                where: {
                    id
                },
            })

            return findUniqueMembrobyId
        }

        return findAllMembros
    }
}