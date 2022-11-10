import WebController from './WebController.js';
import { IController } from '../../abstracts/Common.js';

import HomeView from '../../views/HomeView.js';

import { NextFunction, Request, Response } from 'express';

export default class HomeController extends WebController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        const homeView = new HomeView();
        
        this.renderPage(req, res, homeView);
    }
}