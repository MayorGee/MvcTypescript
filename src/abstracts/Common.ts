import { NextFunction, Request, Response, Router } from "express";

export enum RequestMethod {
    get = 'get',
    post = 'post'
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

export interface ErrorResponse {
    res: Response,
    page: string, 
    responseCode?: number,
    errorMessage?: string 
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