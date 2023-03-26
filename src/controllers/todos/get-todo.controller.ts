import {Response, Request} from 'express';

export const getTodoController = (req: Request, res: Response) => {
    res.send("get todo by id")
};