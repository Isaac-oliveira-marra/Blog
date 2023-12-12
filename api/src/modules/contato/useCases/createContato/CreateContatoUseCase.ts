import { prisma } from "../../../../prisma/client";
import { CreateContatoDto } from "../../dto/createContatoDto";

export class CreateContatoUseCase {
    async execute({nome, email, assunto, descricao}: CreateContatoDto) {
        try {
            const createContato = await prisma.contato.create({
                data: {
                    nome, email, assunto, descricao
                }
            })
            return createContato
        } catch (error) {
            return error
        }
    }
}