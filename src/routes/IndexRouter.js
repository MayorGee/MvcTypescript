import express from 'express';

import IndexController from '../controllers/IndexController.js';

const indexController = new IndexController();

export default class IndexRouter {
    constructor(){
        this.router = express.Router();
    }

    initRoute(){
        this.router.get('/', indexController.execute.bind(indexController));
        
        return this.router;
    }
}