import AbstractRouter from './AbstractRouter.js';
import HomeController from '../controllers/HomeController.js';

const homeController = new HomeController();

import { IRouter, RequestMethod } from '../abstracts/Common.js';

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