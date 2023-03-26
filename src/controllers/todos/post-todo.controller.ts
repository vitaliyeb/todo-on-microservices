import {Response, Request} from 'express';

export const postTodoController = (req: Request, res: Response) => {
    res.send("create todo")
}