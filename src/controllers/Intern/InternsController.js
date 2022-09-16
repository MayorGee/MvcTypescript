import InternsView from '../../views/InternsView.js';
import Database from '../../Database.js';
import AbstractController from '../AbstractController.js';



export default class InternsController extends AbstractController {
    async execute(req, res) {
        const internsView = new InternsView();
        
        const interns = await Database.runQuery(
            `SELECT * FROM Intern
            JOIN Intern_Gender
            ON Intern.Id = Intern_Gender.Intern_Id
            JOIN Specialty_Area
            ON Intern.Specialty_Area_Id = Specialty_Area.Id`
        );      

        internsView.setInterns(interns);

        this.renderPage(res, internsView);
    }
}

