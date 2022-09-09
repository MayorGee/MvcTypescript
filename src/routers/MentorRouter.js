import express from 'express';

import MentorController from '../controllers/MentorController.js';
import MentorsController from '../controllers/MentorsController.js';

const mentorController = new MentorController();
const mentorsController = new MentorsController();

export default class MentorRouter {
    constructor() {
        this.router = express.Router();
    }

    setRoutes() {
        this.router.get('/mentor', mentorController.execute.bind(mentorController));
        this.router.get('/mentors', mentorsController.execute.bind(mentorsController));
    }

    getRoutes() {
        this.setRoutes();
        
        return this.router;
    }
}