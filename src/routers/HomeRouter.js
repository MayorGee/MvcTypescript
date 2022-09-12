import HomeController from '../controllers/HomeController.js';
import AbstractRouter from './AbstractRouter.js';

const homeController = new HomeController();

export default class HomeRouter extends AbstractRouter {
    constructor() {
        super();

        this.pairsOfRoutesAndControllers = [
            ['/', homeController]
        ];

        this.setRouter();
    }
}