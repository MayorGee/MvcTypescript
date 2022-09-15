import InternsView from '../../views/InternsView.js';
import AbstractController from '../AbstractController.js';

export default class InternsController extends AbstractController{
    constructor() {
        super();

        this.view = new InternsView();
        this.query = 
            `SELECT * FROM Intern
            JOIN Intern_Gender
            ON Intern.Id = Intern_Gender.Intern_Id
            JOIN Specialty_Area
            ON Intern.Specialty_Area_Id = Specialty_Area.Id`
    }

    async setData(interns) {
        this.view.setInterns(interns);
    }
}