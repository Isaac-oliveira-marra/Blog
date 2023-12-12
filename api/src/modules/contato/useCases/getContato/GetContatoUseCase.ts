import { prisma } from "../../../../prisma/client";
import { GetContatoDto } from "../../dto/getContatoDto";

export class GetContatoUseCase{
    async execute ({email}: GetContatoDto) {
        const findAllContatos = await prisma.contato.findMany({})
       
        if(email) {
            const findUniqueEmail = await prisma.contato.findMany({
                where: {
                    email
                },
            })

            return findUniqueEmail
        }

        return findAllContatos
    }
}