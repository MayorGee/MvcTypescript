import express from 'express';

export default class AbstractRouter {
    routes = [];
    
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }

    setRouter() {
        this.routes?.forEach(({ path, controller, method }) => {
            if (method === 'GET') {
                this.router.get(path, controller.execute.bind(controller));
            } else if (method === 'POST') {
                this.router.post(path, controller.execute.bind(controller));
            }           
        });
    }

    getRouter() {
        return this.router;
    }
}