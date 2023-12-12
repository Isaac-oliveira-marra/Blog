import { Router } from "express";
import { CreatePostController } from "../modules/post/useCases/createPost/CreatePostController";
import { GetPostController } from "../modules/post/useCases/getPost/GetPostController";
import { DeletePostController } from "../modules/post/useCases/deletePost/DeletePostController";
import { UpdatePostController } from "../modules/post/useCases/updatePost/UpdatePostController";

const postRoutes = Router()

const createPostController = new CreatePostController()
const getPostController = new GetPostController()
const deletePostController = new DeletePostController()
const updatePostController = new UpdatePostController()


postRoutes.post('/', createPostController.handle )
postRoutes.get('/:id?', getPostController.handle )
postRoutes.delete("/:id", deletePostController.handle)
postRoutes.patch("/:id", updatePostController.handle)

export {postRoutes}