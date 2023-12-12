import { Request, Response } from "express";
import { UpdatePostDto } from "../../dto/updatePostDto";
import { UpdatePostUseCase } from "./UpdatePostUseCase";
import multer from "multer";
import multerConfig from "../../../../multer/multerConfig";

const upload = multer(multerConfig).single('imagem')


export class UpdatePostController {
    handle(req: Request,  res: Response) {
        return upload(req, res, async (error) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                try {
                const {assunto, titulo, conteudo}: UpdatePostDto = req.body
                //@ts-ignore
                const { path } = req.file
                const caminho = path.replaceAll("\\", "/")
                const caminhoPartido = caminho.split('/')
                const caminhoSintetizado = `./${caminhoPartido[5]}/${caminhoPartido[6]}`
                const updatePostUseCase = new UpdatePostUseCase()

                const idString  = req.params.id

                const id = Number(idString)

                const result = await updatePostUseCase.execute({imagem: caminhoSintetizado, titulo, assunto, conteudo, id})

                return res.json(result)
                } catch (error) {
                    return res.json(error)
                }
            }
        })
    }
}