import { NextFunction, Request, Response } from 'express';
import { IController } from '../abstracts/Common.js';

import HomeView from '../views/HomeView.js';
import AbstractController from './AbstractController.js';

export default class HomeController extends AbstractController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        const homeView = new HomeView();
        
        this.renderPage(req, res, homeView);
    }
}