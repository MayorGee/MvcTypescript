import express from 'express';

import InternController from '../controllers/InternController.js';
import InternsController from '../controllers/InternsController.js';

const internController = new InternController();
const internsController = new InternsController();

export default class InternRouter {
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }

    setRouter() {
        this.router.get('/intern', internController.execute.bind(internController));
        this.router.get('/interns', internsController.execute.bind(internsController));
    }

    getRouter() {     
        return this.router;
    }

}