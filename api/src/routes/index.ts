import { Router } from "express";
import { contatoRoutes } from "./contatoRoutes";
import { postRoutes } from "./postRoutes";
import { membrosRoutes } from "./membrosRoutes";

const routes = Router()

routes.use('/contato', contatoRoutes)
routes.use('/post', postRoutes)
routes.use('/membros', membrosRoutes)

export {routes}