import * as modelTodo from "../Model/index.js"

const get = async () => {
    return modelTodo.get()
}

const create = async (todo) => {
    return await modelTodo.create(todo)
}

const update = async (todoId, todo) => {
    return await modelTodo.update(todoId, todo)
}

const erase = async (todoId) => {
    return await modelTodo.erase(todoId)
}

const count = async () => {
    return await modelTodo.count({})
}

export { get, create, update, erase, count }
