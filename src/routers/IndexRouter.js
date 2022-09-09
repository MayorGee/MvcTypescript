import express from 'express';

import IndexController from '../controllers/IndexController.js';

const indexController = new IndexController();

export default class IndexRouter {
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }

    setRouter() {
        this.router.get('/', indexController.execute.bind(indexController));
    }

    getRouter() {
        return this.router;
    }
}