import AbstractRouter from '../AbstractRouter.js';
import HomeController from '../../controllers/web/HomeController.js';
import { IRouter } from '../../abstracts/Contract.js';
import { RequestMethod } from '../../abstracts/Enum.js';

const homeController = new HomeController();

export default class HomeRouter extends AbstractRouter implements IRouter {
    constructor() {
        super();

        this.routes = [ 
            {
                route: '/',
                controller: homeController,
                requestMethod: RequestMethod.get
            }         
        ];

        this.setRouter();
    }
}