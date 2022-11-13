import WebController from './WebController.js';

import HomeView from '../../views/HomeView.js';

import { NextFunction, Request, Response } from 'express';
import { IController } from '../../abstracts/Contract.js';

export default class HomeController extends WebController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        const homeView = new HomeView();
        
        this.renderPage(req, res, homeView);
    }
}