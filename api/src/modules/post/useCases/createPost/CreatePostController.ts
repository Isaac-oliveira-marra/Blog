import { Request, Response } from "express";
import { CreatePostDto } from "../../dto/createPostDto";
import { CreatePostUseCase } from "./CreatePostUseCase";
import multer from "multer";
import multerConfig from "../../../../multer/multerConfig";

const upload = multer(multerConfig).single('imagem')
export class CreatePostController {
    handle(req: Request,  res: Response) {
        return upload(req, res, async (error) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                try {
                const {assunto, titulo, conteudo}: CreatePostDto = req.body
                //@ts-ignore
                const { path } = req.file
                const caminho = path.replaceAll("\\", "/")
                const caminhoPartido = caminho.split('/')
                const caminhoSintetizado = `./${caminhoPartido[5]}/${caminhoPartido[6]}`
                const createPostUseCase = new CreatePostUseCase()

                const result = await createPostUseCase.execute({imagem: caminhoSintetizado, titulo, assunto, conteudo})

                return res.json(result)
                } catch (error) {
                    return res.json(error)
                }
            }
        })
    }
}