import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { DeletePostDto } from "../../dto/deletePostDto";

export class DeletePostUseCase {

    async execute({id}: DeletePostDto) {
        const findPost = await prisma.post.findUnique({
            where: {
                id
            }
        })

        if (!findPost) {
           throw new AppError('post não existe', 400)
        }
 
        const deletePost = await prisma.post.delete({
            where: {
                id
            }
        })
        
        return deletePost
    }
}

