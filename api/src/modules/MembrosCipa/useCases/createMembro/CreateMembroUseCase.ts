import { prisma } from "../../../../prisma/client";
import { CreateMembroDto } from "../../dto/createMembroDto";

export class CreateMembroUseCase {
    async execute({ imagem, nome }: CreateMembroDto) {
        try {   
            const createMembro = await prisma.membrosCipa.create({
            data: {
                imagem,
                nome
            }
        });
            return createMembro;
        } catch (error) {
            return {
                message: 'Ocorreu um erro ao criar o membro',
                //@ts-ignore
                erro: error.message
            };
        }
    }
}
