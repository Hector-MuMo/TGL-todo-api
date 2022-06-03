import mongoose from "mongoose";
import express from "express";
import cors from "cors"
import TodoRoutes from "./api/Todo/Routes/index.js"
import "dotenv/config"

// start express

const app = express()

app.use(express.json())

app.use(cors());

console.log(process.env);

//Mongo connection
const password = process.env.MONGODB_PASSWORD

mongoose.connect(`mongodb+srv://hcmm-todo:${password}@sandbox.96o8b.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

//Checking connection works
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

//Port listen
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log("Server listening on port " + port);
})

//Routers

app.use("/todo", TodoRoutes)
