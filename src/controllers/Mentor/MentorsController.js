import MentorsView from '../../views/MentorsView.js';
import Database from '../../Database.js';
import AbstractController from '../AbstractController.js';

export default class MentorsController extends AbstractController {
    async execute(req, res) {
        const mentorsView = new MentorsView();
        
        const mentors = await Database.runQuery(
            `SELECT * FROM Mentor
            JOIN Specialty_Area
            ON Mentor.Specialty_Area_Id = Specialty_Area.Id`
        );      

        mentorsView.setMentors(mentors);

        this.renderPage(res, mentorsView);
    }
}