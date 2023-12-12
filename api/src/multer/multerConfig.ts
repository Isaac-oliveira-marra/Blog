import multer from "multer"
import {extname, resolve} from 'path'

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000)

export default {
    //@ts-ignore
    fileFilter:(req, file, cb) => {
        if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg') {
            //@ts-ignore
            return cb(new multer.MulterError('Arquivo precisa ser png, jpeg ou jpg'))
        }

        return cb(null, true)
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null,resolve(__dirname, '..', '..', '..', 'cipa', 'public', 'images'))
        }, 
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`)
        }
    })
}

