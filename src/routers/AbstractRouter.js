import express from 'express';

export default class AbstractRouter {
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }
    
    routes = {};

    setRouter() {
        Object.entries(this.routes)?.forEach(entry => {
            const [route, controller] = entry;
            
            this.router.get(route, controller.execute.bind(controller));
        });
    }

    getRouter() {
        return this.router;
    }
}