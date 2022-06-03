import { getTodos, createTodo, updateTodo, eraseTodo, countTodos } from "../Controllers/index.js"
import * as express from 'express'

const router = express.Router()

router.get("/", getTodos)
router.post("/", createTodo)
router.put("/:id", updateTodo)
router.delete("/:id", eraseTodo)

export default router
