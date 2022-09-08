import express from 'express';

import InternshipController from '../controllers/InternshipController.js';
import InternshipsController from '../controllers/InternshipsController.js';

const internshipController = new InternshipController();
const internshipsController = new InternshipsController();

export default class InternshipRouter {
    constructor() {
        this.router = express.Router();
    }

    initRoutes() {
        this.router.get('/internship', internshipController.execute.bind(internshipController));
        this.router.get('/internships', internshipsController.execute.bind(internshipsController));
        
        return this.router;
    }
}