import express from 'express';
import {TodosRouter} from "./controllers/todos/todo.router";

const app = express()
const port = 3000;

app.use(express.json({limit: '1mb'}))

app.use('/todos', TodosRouter)

app.listen(port, () => {
    console.log(`listener port: ${port}`);
})