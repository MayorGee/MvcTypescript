import { NextFunction, Request, Response, Router } from "express";

export enum RequestMethod {
    get = 'get',
    post = 'post'
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

export interface QueryResponseData {
    [key: string]: string | number | Date
}

export interface ErrorResponse {
    res: Response,
    page: string, 
    responseCode?: number,
    errorMessage?: string 
}

export interface IResource {
    escapeHtml: (unsafe: string) => string,
    escapeHtmlFromSingleDataSet: <T>(queryData: any) => T,
    escapeHtmlFromDataSet: <T>(queryData: Array<T>) => Array<T>
}

export interface IView {
    getTemplate: () => string,
    setTemplate: (template: string) => this 
}