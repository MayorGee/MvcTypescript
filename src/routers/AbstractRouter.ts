import express, { Router } from 'express';
import { Route, IRouter, RequestMethod } from '../abstracts/Common.js';

export default class AbstractRouter implements IRouter {
    protected routes: Route[] = [];
    protected router: Router; 
    
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }

    public setRouter() {
        this.routes.forEach(({ route, controller, requestMethod }) => {
            if (requestMethod === RequestMethod.get) {
                this.router.get(route, controller.execute.bind(controller));
            } else if (requestMethod === RequestMethod.post) {
                this.router.post(route, controller.execute.bind(controller));
            }           
        });
    }

    public getRouter() {
        return this.router;
    }
}