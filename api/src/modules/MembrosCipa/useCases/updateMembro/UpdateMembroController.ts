import { Request, Response } from "express";
import multer from "multer";
import multerConfig from "../../../../multer/multerConfig";
import { UpdateMembroDto } from "../../dto/updateMembroDto";
import { UpdateMembroUseCase } from "./UpdateMembroUseCase";

const upload = multer(multerConfig).single('imagem')


export class UpdateMembroController {
    handle(req: Request,  res: Response) {
        return upload(req, res, async (error) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                try {
                const {nome}: UpdateMembroDto = req.body
                //@ts-ignore
                const { path } = req.file
                const caminho = path.replaceAll("\\", "/")
                const caminhoPartido = caminho.split('/')
                const caminhoSintetizado = `./${caminhoPartido[5]}/${caminhoPartido[6]}`
                const updateMembroUseCase = new UpdateMembroUseCase()

                const idString  = req.params.id

                const id = Number(idString)

                const result = await updateMembroUseCase.execute({imagem: caminhoSintetizado, nome, id})

                return res.json(result)
                } catch (error) {
                    return res.json(error)
                }
            }
        })
    }
}