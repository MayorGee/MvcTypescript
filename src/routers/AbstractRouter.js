import express from 'express';

export default class AbstractRouter {
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }

    setRouter() {
        this.pairsOfRoutesAndControllers?.forEach((pair) => {
            const route = pair[0];
            const controller = pair[1];

            this.router.get(route, controller.execute.bind(controller));
        })
    }

    getRouter() {
        return this.router;
    }
}