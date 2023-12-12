import { prisma } from "../../../../prisma/client";
import { GetPostDto } from "../../dto/getPostDto";

export class GetPostUseCase{
    async execute ({id}: GetPostDto) {
        const findAllPost = await prisma.post.findMany({})
       
        if(id) {
            const findUniquePostbyTitle = await prisma.post.findUnique({
                where: {
                    id
                },
            })

            return findUniquePostbyTitle
        }

        return findAllPost
    }
}