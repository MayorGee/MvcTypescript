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
            switch (requestMethod) {
                case RequestMethod.get:
                    return this.router.get(route, controller.execute.bind(controller));
                case RequestMethod.post:
                    return this.router.post(route, controller.execute.bind(controller));
                case RequestMethod.put:
                    return this.router.put(route, controller.execute.bind(controller));
                case RequestMethod.delete:
                    return this.router.delete(route, controller.execute.bind(controller));;
                default:
                    return;           
            }
        });
    }

    public getRouter() {
        return this.router;
    }
}