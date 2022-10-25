import { Response } from 'express';

export default class Controller {
    protected sendResponse(res: Response, errorCode: number, errorMessage: string): Response {
        return res.status(errorCode).send(errorMessage)
    }

    protected handleIdError(id: any, res: Response) {
        let errorText = id ? 'Invalid id entered' : 'No Id entered';

        this.sendResponse(res, 500, errorText);
    }
}