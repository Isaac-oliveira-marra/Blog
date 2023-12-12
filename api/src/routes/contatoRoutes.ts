import { Router } from "express";
import { CreateContatoController } from "../modules/contato/useCases/createContato/CreateContatoController";
import { GetContatoController } from "../modules/contato/useCases/getContato/GetContatoController";
import { DeleteContatoController } from "../modules/contato/useCases/deleteContato/DeleteContatoController";

const contatoRoutes = Router()

const createContatoController = new CreateContatoController()
const getContatoController = new GetContatoController()
const deleteContatoController = new DeleteContatoController()

contatoRoutes.post('/', createContatoController.handle )

contatoRoutes.delete('/:id', deleteContatoController.handle )

contatoRoutes.get('/', getContatoController.handle )

export {contatoRoutes}