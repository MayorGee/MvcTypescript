import HomeView from '../views/HomeView.js';
import AbstractController from './AbstractController.js';

export default class HomeController extends AbstractController {
    execute(req, res) {
        const homeView = new HomeView();
        
        this.renderPage(res, homeView);
    }
}