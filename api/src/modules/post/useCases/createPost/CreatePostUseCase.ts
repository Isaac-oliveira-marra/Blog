import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePostDto } from "../../dto/createPostDto";

export class CreatePostUseCase {
    async execute({ imagem, assunto, titulo, conteudo }: CreatePostDto) {
        const findPost = await prisma.post.findUnique({
            where: {
                titulo
            }
        })

        if (findPost) {
           throw new AppError('post já existe', 400)
        }
        try {   
            const createPost = await prisma.post.create({
            data: {
                imagem,
                assunto,
                titulo,
                conteudo
            }
        });
            return createPost;
        } catch (error) {
            return {
                message: 'Ocorreu um erro ao criar o post',
                //@ts-ignore
                erro: error.message
            };
        }
    }
}
