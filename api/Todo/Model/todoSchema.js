import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    owner: String,
    task: String,
    isCompleted: Boolean
}, {
    id: true, toJSON: {
        virtuals: true,
        versionKey: true
    },
    timestamps: true
})

export default TodoSchema