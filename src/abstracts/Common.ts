import { Response } from 'express';
import { IController } from './Contract.js';
import { RequestMethod } from './Enum.js';
import { ResponseData } from './Record.js';

export interface Route {
    route: string,
    controller: IController
    requestMethod: RequestMethod
}

export interface ErrorResponse {
    res: Response,
    errorCode?: number,
    errorMessage?: string
}

export interface SuccessResponse {
    res: Response,
    code?: number,
    message?: string,
    data?: ResponseData
}

export interface WebErrorResponse extends ErrorResponse {
    page: string
}