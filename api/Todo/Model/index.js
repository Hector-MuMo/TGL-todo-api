import mongoose from "mongoose";
import TodoSchema from "./todoSchema.js"

const get = async () => {
    const TodoModel = mongoose.model("todo", TodoSchema)

    return await TodoModel.find({})
}

const create = async (todo) => {
    const TodoModel = mongoose.model("todo", TodoSchema)

    return await TodoModel.create(todo)
}

const update = async (todoId, todo) => {
    let filter = { _id: todoId }

    const TodoModel = mongoose.model("todo", TodoSchema)

    return await TodoModel.updateOne(filter, todo)
}

const erase = async (todoId) => {
    let filter = { _id: todoId }

    const TodoModel = mongoose.model("todo", TodoSchema)

    return await TodoModel.deleteOne(filter)
}

const count = async () => {
    const TodoModel = mongoose.model("todo", TodoSchema)

    return await TodoModel.count({})
}

export { get, create, update, erase, count }

