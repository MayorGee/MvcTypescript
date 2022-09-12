import express from 'express';

export default class AbstractRouter {
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }

    setRouter() {}

    getRouter() {
        return this.router;
    }
}