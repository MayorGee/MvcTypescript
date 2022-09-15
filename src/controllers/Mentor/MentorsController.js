import MentorsView from '../../views/MentorsView.js';
import AbstractController from '../AbstractController.js';

export default class MentorsController extends AbstractController {
    constructor() {
        super();

        this.view = new MentorsView();
        this.query = 
            `SELECT * FROM Mentor
            JOIN Specialty_Area
            ON Mentor.Specialty_Area_Id = Specialty_Area.Id`;
    }  
    async setData(mentors) {
        this.view.setMentors(mentors);
    }
}