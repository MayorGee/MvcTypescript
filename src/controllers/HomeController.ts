import { IController } from '../abstracts/Common.js';

import HomeView from '../views/HomeView.js';
import AbstractController from './AbstractController.js';

export default class HomeController extends AbstractController implements IController {
    handleGet(req: any, res: any, next: any) {
        const homeView = new HomeView();
        
        this.renderPage(req, res, homeView);
    }
}