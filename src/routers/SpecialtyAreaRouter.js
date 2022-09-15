import AbstractRouter from './AbstractRouter.js';

import SpecialtyAreaController from '../controllers/SpecialtyArea/SpecialtyAreaController.js';
import SpecialtyAreasController from '../controllers/SpecialtyArea/SpecialtyAreasController.js';

const specialtyAreaController = new SpecialtyAreaController();
const specialtyAreasController = new SpecialtyAreasController();

export default class SpecialtyAreaRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/specialty-area',
                controller: specialtyAreaController,
                method: 'GET'
            },
            {
                path: '/specialty-areas',
                controller: specialtyAreasController,
                method: 'GET'
            },
            {
                path: '/specialty-areas',
                controller: specialtyAreasController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}