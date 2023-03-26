import {Response, Request} from 'express';

export const getTodosController = (req: Request, res: Response) => {
    res.send("get all todos")
}