import express from 'express';
import {TodosRouter} from "./controllers/todos/todo.router";
import {sendErrorResponse} from "./error-handling/error-handler";

const app = express()
const port = 3000;

app.use(express.json({limit: '1mb'}))

app.use('/todos', TodosRouter)

app.use(sendErrorResponse);

app.listen(port, () => {
    console.log(`listener port: ${port}`);
})