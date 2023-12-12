import { Request, Response } from "express";
import multer from "multer";
import multerConfig from "../../../../multer/multerConfig";
import { CreateMembroDto } from "../../dto/createMembroDto";
import { CreateMembroUseCase } from "./CreateMembroUseCase";

const upload = multer(multerConfig).single('imagem')
export class CreateMembroController {
    handle(req: Request,  res: Response) {
        return upload(req, res, async (error) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            } else {
                try {
                const {nome}: CreateMembroDto = req.body
                //@ts-ignore
                const { path } = req.file
                const caminho = path.replaceAll("\\", "/")
                const caminhoPartido = caminho.split('/')
                const caminhoSintetizado = `./${caminhoPartido[5]}/${caminhoPartido[6]}`
                const createMembroUseCase = new CreateMembroUseCase()
                const resultado =  await createMembroUseCase.execute({imagem: caminhoSintetizado, nome})
                return res.json(resultado)
                } catch (error) {
                    return res.json(error)
                }
            }
        })
    }
}