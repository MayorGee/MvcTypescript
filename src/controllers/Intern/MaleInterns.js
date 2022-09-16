import InternsView from '../../views/InternsView.js';
import Database from '../../Database.js';
import AbstractController from '../AbstractController.js';

const internsView = new InternsView();

export default class MaleInternsController extends AbstractController {

    async execute(req, res) {
        
        const interns = await Database.runQuery(
            `SELECT * FROM Intern
            JOIN Intern_Gender
            ON Intern.Id = Intern_Gender.Intern_Id
            JOIN Specialty_Area
            ON Intern.Specialty_Area_Id = Specialty_Area.Id
            WHERE Gender = "Male"`
        );      

        this.setInterns(interns);

        this.renderPage(res, internsView);;
    }
    
    async setInterns(interns) {
        internsView.setInterns(interns);
    }
}