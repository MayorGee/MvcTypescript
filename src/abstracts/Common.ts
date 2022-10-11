export enum RequestMethod {
    get = 'get',
    post = 'post'
}

export interface IController {
    execute: (req: any, res: any, next: any) => void
}

export interface IRouter {
    setRouter: () => void;
    getRouter: () => any;
}

export interface Route {
    route: string,
    controller: IController
    requestMethod: RequestMethod
}

export interface IObjectStringIndex {
    [key: string]: any
}

export interface ErrorResponse {
    res: object,
    page: string, 
    responseCode?: number,
    errorMessage?: string 
}

export interface IResource {
    escapeHtml: (unsafe: string) => string,
    escapeHtmlFromQueryData: (queryData: any) => any,
    escapeHtmlFromDataSet: (queryData: any) => any 
}

export interface IView {
    getTemplate: () => string,
    setTemplate: (template: string) => this 
}