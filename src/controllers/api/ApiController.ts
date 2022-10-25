import Controller from '../Controller.js';
import { ApiErrorResponse, IController, RequestMethod } from '../../abstracts/Common.js';

import { NextFunction, Request, Response } from 'express';

export default class ApiController extends Controller implements IController {
    public execute(req: Request, res: Response, next: NextFunction) {
        const requestMethod = req.method.toLowerCase();

        switch (requestMethod) {
            case RequestMethod.get:
                return this.handleGet(req, res, next);
            case RequestMethod.post:
                return this.handlePost(req, res, next);
            case RequestMethod.put:
                return this.handlePut(req, res, next);
            case RequestMethod.delete:
                return this.handleDelete(req, res, next);
            default:
                return this.sendServerError({ 
                    res, 
                    errorCode:501, 
                    errorMessage :`${requestMethod} method type wasn't implemented`
                });
        }
    }

    protected handleGet(req: Request, res: Response, next: NextFunction): void {}

    protected handlePost(req: Request, res: Response, next: NextFunction): void {}

    protected handlePut(req: Request, res: Response, next: NextFunction): void {}

    protected handleDelete(req: Request, res: Response, next: NextFunction): void {}

    protected handleId(id: any): number | null {
        let preparedId: number | null = null;

        if (typeof id === 'number' && Number.isInteger(id)) {
            preparedId = id;
        }

        if (typeof id === 'string') {
            preparedId = Number.isInteger(parseInt(id)) ? parseInt(id) : null;
        }

        return preparedId;
    }

    protected sendServerError({
        res, 
        errorCode = 500, 
        errorMessage = 'Server Error'
    }: ApiErrorResponse){
        this.sendResponse(res, errorCode, errorMessage);
    }

    protected sendClientError({
        res, 
        errorCode = 400, 
        errorMessage = 'Invalid Id Entered'
    }: ApiErrorResponse){
        this.sendResponse(res, errorCode, errorMessage);
    }

    protected parseToInt(str: string) {
        return parseInt(str);
    }
}