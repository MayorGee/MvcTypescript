import { Response } from 'express';
import { ApiErrorResponse } from '../abstracts/Common.js';

export default class Controller {
    protected returnFailedResponse({
        res, 
        errorCode, 
        errorMessage
    }: ApiErrorResponse): Response {
        return res.status(errorCode).json({
            message: errorMessage
        })
    }

    protected handleIdError(id: any, res: Response) {
        let errorText = id ? 'Invalid id entered' : 'No Id entered';

        this.returnFailedResponse({ res, errorCode: 500, errorMessage: errorText });
    }

    protected isNumber(variable: any): variable is number {
        return  typeof variable === 'number' && Number.isInteger(variable)
    }
}