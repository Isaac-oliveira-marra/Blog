import { prisma } from "../../../../prisma/client";
import { UpdatePostDto } from "../../dto/updatePostDto";

export class UpdatePostUseCase {
    async execute({assunto, conteudo, titulo, id, imagem}: UpdatePostDto) {
        const post = await prisma.post.findUnique({
            where: {
                id
            }
        })

        if (!post) {
          return 'post nao existe'
        }
 
        const updatePost = await prisma.post.update({
            where: {
                id
            },
            data: {
                assunto,
                conteudo, 
                titulo,
                imagem
            }
        })
        
        return updatePost
    }
}

