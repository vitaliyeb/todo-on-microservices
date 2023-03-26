import {Router} from "express";
import {getTodoController} from "./get-todo.controller";
import {getTodosController} from "./get-todos.controller";
import {deleteTodoController} from "./delete-todo.controller";
import {postTodoController} from "./post-todo.controller";
import {putTodoController} from "./put-todo.controller";
import {validateInputs} from "../../pre-request-handlers/openapi";

export const TodosRouter = Router();

TodosRouter.use(validateInputs);

TodosRouter.get("/:id", getTodoController);
TodosRouter.get("", getTodosController);
TodosRouter.delete("/:id", deleteTodoController);
TodosRouter.post("", postTodoController);
TodosRouter.put("/:id", putTodoController);