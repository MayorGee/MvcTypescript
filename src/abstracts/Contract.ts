import { NextFunction, Request, Response, Router } from 'express';
import { QueryData } from './Record';

export interface IController {
    execute: (req: Request, res: Response, next: NextFunction) => void
}

export interface IRouter {
    setRouter: () => void;
    getRouter: () => Router;
}

export interface ICache {
    readCache: <T>(entityName: string) => Promise<T| undefined>,
    writeCache: <T>(entityName: string, entity: T) => Promise<void>,
    deleteEntityFromCache: (entityName: string) => Promise<void>,
    clearCache: () => Promise<void>,
    getEntityCacheKey: (entityName: string) => string
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