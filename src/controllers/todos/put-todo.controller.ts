import {Response, Request} from 'express';

export const putTodoController = (req: Request, res: Response) => {
    res.send("update todo")
}