import { Router } from "express";
import { CreateMembroController } from "../modules/MembrosCipa/useCases/createMembro/CreateMembroController";
import { GetMembroController } from "../modules/MembrosCipa/useCases/getMembro/GetMembroController";
import { DeleteMembroController } from "../modules/MembrosCipa/useCases/deleteMembro/DeleteMembroController";
import { UpdateMembroController } from "../modules/MembrosCipa/useCases/updateMembro/UpdateMembroController";


const membrosRoutes = Router()

const createMembroController = new CreateMembroController()
const getMembroController = new GetMembroController()
const deleteMembroController = new DeleteMembroController()
const updateMembroController = new UpdateMembroController()


membrosRoutes.post('/', createMembroController.handle )
membrosRoutes.get('/:id?', getMembroController.handle )
membrosRoutes.delete("/:id", deleteMembroController.handle)
membrosRoutes.patch("/:id", updateMembroController.handle)

export {membrosRoutes}