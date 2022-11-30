import Controller from '../Controller.js';
import { IController } from '../../abstracts/Contract.js';

import { SuccessResponse } from '../../abstracts/Common.js';

import { NextFunction, Request, Response } from 'express';
import { RequestMethod } from '../../abstracts/Enum.js';
import { injectable } from 'inversify';

@injectable()
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
                return this.returnFailedResponse({ 
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


    protected returnSuccessResponse({
        res, 
        code = 200, 
        message = 'Success', 
        data
    }: SuccessResponse): Response  {
        return res.status(code).json({
            message: message,
            data: data
        })
    }
}