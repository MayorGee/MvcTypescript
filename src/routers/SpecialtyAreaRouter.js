import express from 'express';

import SpecialtyAreaController from '../controllers/SpecialtyAreaController.js';
import SpecialtyAreasController from '../controllers/SpecialtyAreasController.js';

const specialtyAreaController = new SpecialtyAreaController();
const specialtyAreasController = new SpecialtyAreasController();

export default class SpecialtyAreaRouter {
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }

    setRouter() {
        this.router.get('/specialty-area', specialtyAreaController.execute.bind(specialtyAreaController));
        this.router.get('/specialty-areas', specialtyAreasController.execute.bind(specialtyAreasController));
    }

    getRouter() {      
        return this.router;
    }
}