import AbstractRouter from './AbstractRouter.js';

import SpecialtyAreaController from '../controllers/SpecialtyAreaController.js';
import SpecialtyAreasController from '../controllers/SpecialtyAreasController.js';

const specialtyAreaController = new SpecialtyAreaController();
const specialtyAreasController = new SpecialtyAreasController();

export default class SpecialtyAreaRouter extends AbstractRouter {
    constructor() {
        super();

        this.pairsOfRoutesAndControllers = [
            ['/specialty-area', specialtyAreaController],
            ['/specialty-areas', specialtyAreasController]
        ];

        this.setRouter();
    }
}