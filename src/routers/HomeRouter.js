import express from 'express';

import HomeController from '../controllers/HomeController.js';

const homeController = new HomeController();

export default class HomeRouter {
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }

    setRouter() {
        this.router.get('/', homeController.execute.bind(homeController));
    }

    getRouter() {
        return this.router;
    }
}