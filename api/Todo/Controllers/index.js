import * as todoServices from "../Services/index.js"

const getTodos = async (req, res) => {
    let allTodos = await todoServices.get()

    return res.status(200).send(allTodos)
}

const createTodo = async (req, res) => {
    let todo = req.body

    let todoCreated = await todoServices.create(todo)

    return res.status(201).send(todoCreated)
}

const updateTodo = async (req, res) => {
    let todo = req.body
    let todoId = req.params.id

    let todoUpdated = await todoServices.update(todoId, todo)

    return res.status(200).send(todoUpdated)

}

const eraseTodo = async (req, res) => {
    let todoId = req.params.id

    let todoDeleted = await todoServices.erase(todoId)

    return res.status(200).send(todoDeleted)
}

const countTodos = async (req, res) => {
    let totalTodos = await todoServices.get()

    return res.status(200).send({ totalTodos })
}

export { getTodos, createTodo, updateTodo, eraseTodo, countTodos }
