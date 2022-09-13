import express from 'express';

export default class AbstractRouter {
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }
    
    routes = [];

    setRouter() {
        this.routes?.forEach(routePair => {
            const route = routePair.path;
            const controller = routePair.controller;
            
            this.router.get(route, controller.execute.bind(controller));
        });
    }

    getRouter() {
        return this.router;
    }
}