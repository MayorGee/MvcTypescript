import { NextFunction, Request, Response, Router } from "express";

export enum RequestMethod {
    get = 'get',
    post = 'post',
    put = 'put',
    delete = 'delete'
}

export enum Role {
    intern = 'Intern',
    mentor = 'Mentor'
}

export interface IController {
    execute: (req: Request, res: Response, next: NextFunction) => void
}

export interface IRouter {
    setRouter: () => void;
    getRouter: () => Router;
}

export interface Route {
    route: string,
    controller: IController
    requestMethod: RequestMethod
}

export type QueryDataType = string | number | Date;
export type QueryPropertyType = any;

export type QueryData = Record<QueryPropertyType,QueryDataType>

export type ResponseDataType = any;
export type ResponsePropertyType = string;

export type ResponseData = Record<ResponsePropertyType,ResponseDataType>

export interface ErrorResponse {
    res: Response,
    errorCode: number,
    errorMessage?: string
}

export interface SuccessResponse {
    res: Response,
    code?: number,
    message?: string,
    data?: ResponseData
}

export interface ApiErrorResponse extends ErrorResponse {}

export interface WebErrorResponse extends ErrorResponse {
    page: string
}

export interface IResource {
    escapeHtml: (unsafe: string) => string,
    escapeHtmlFromSingleDataSet: <T extends QueryData>(queryData: T) => T,
    escapeHtmlFromDataSet: <T extends QueryData>(queryData: Array<T>) => Array<T>
}

export interface IView {
    getTemplate: () => string,
    setTemplate: (template: string) => this 
}