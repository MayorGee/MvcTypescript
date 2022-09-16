import MentorsView from '../../views/MentorsView.js';
import Database from '../../Database.js';
import AbstractController from '../AbstractController.js';

const mentorsView = new MentorsView();

export default class MentorsController extends AbstractController {

    async execute(req, res) {
        
        const mentors = await Database.runQuery(
            `SELECT * FROM Mentor
            JOIN Specialty_Area
            ON Mentor.Specialty_Area_Id = Specialty_Area.Id`
        );      

        this.setMentors(mentors);

        this.renderPage(res, mentorsView);
    }
    
    async setMentors(mentors) {
        mentorsView.setMentors(mentors);
    }
}