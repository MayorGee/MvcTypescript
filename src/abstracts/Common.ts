export enum RequestMethod {
    get = 'get',
    post = 'post'
}

export interface IController {
    execute: (req: any, res: any, next: any) => void
}

export interface IRoute {
    route: string,
    controller: any
    requestMethod: RequestMethod
}

export interface IStringIndex {
    [key: string]: any
}