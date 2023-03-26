import {Response, Request} from 'express';


export const deleteTodoController = (req: Request, res: Response) => {
    res.send("delete todo")
}