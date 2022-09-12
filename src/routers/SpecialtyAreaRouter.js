import AbstractRouter from './AbstractRouter.js';

import SpecialtyAreaController from '../controllers/SpecialtyAreaController.js';
import SpecialtyAreasController from '../controllers/SpecialtyAreasController.js';

const specialtyAreaController = new SpecialtyAreaController();
const specialtyAreasController = new SpecialtyAreasController();

export default class SpecialtyAreaRouter extends AbstractRouter {
    constructor() {
        super();
    }

    setRouter() {
        this.router.get('/specialty-area', specialtyAreaController.execute.bind(specialtyAreaController));
        this.router.get('/specialty-areas', specialtyAreasController.execute.bind(specialtyAreasController));
    }
}