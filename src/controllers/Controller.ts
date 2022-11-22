import { Response } from 'express';
import { ErrorResponse } from '../abstracts/Common.js';

export default class Controller {
    protected returnFailedResponse({
        res, 
        errorCode = 500, 
        errorMessage
    }: ErrorResponse): Response {
        return res.status(errorCode).json({
            message: errorMessage
        })
    }

    protected handleIdError(id: any, res: Response) {
        let errorText = id ? 
                    `Error! Id must be an integer or string. Got type: ${typeof id}` : 
                    'No Id entered';

        this.returnFailedResponse({ 
            res, 
            errorCode: 400, 
            errorMessage: errorText 
        });
    }

    protected isNumber(variable: any): variable is number {
        return  typeof variable === 'number' && Number.isInteger(variable)
    }

    protected isString(variable: any): variable is string {
        return typeof variable === 'string';
    }

    protected validateId(id: any): number | null {
        let validatedId: number | null = null;

        if (this.isNumber(id)) {
            validatedId = id;
        }

        if (this.isString(id)) {
            validatedId = Number.isInteger(parseInt(id)) ? parseInt(id) : null;
        }

        return validatedId;
    }
}