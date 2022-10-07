import express from 'express';
import { IRoute, RequestMethod } from '../abstracts/Common.js';

export default class AbstractRouter {
    routes: IRoute[] = [];
    router: any;  // :(
    
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }

    setRouter() {
        this.routes.forEach(({ route, controller, requestMethod }) => {
            if (requestMethod === RequestMethod.get) {
                this.router.get(route, controller.execute.bind(controller));
            } else if (requestMethod === RequestMethod.post) {
                this.router.post(route, controller.execute.bind(controller));
            }           
        });
    }

    getRouter() {
        return this.router;
    }
}