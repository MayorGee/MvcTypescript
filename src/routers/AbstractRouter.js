import express from 'express';

export default class AbstractRouter {
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }
    
    routes = [];

    setRouter() {
        this.routes?.forEach(routeSet => {
            const route = routeSet.path;
            const controller = routeSet.controller;
            const method = routeSet.method;

            if (method === 'GET') {
                this.router.get(route, controller.execute.bind(controller));
            } else if (method === 'POST') {
                this.router.post(route, controller.execute.bind(controller));
            }           
        });
    }

    getRouter() {
        return this.router;
    }
}