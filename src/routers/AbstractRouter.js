import express from 'express';

export default class AbstractRouter {
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }
    
    routes = [];

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