import InternsFormView from '../../views/InternsFormView.js';
import Database from '../../database.js';
import AbstractFormController from './AbstractFormController.js';

export default class InternsFormController extends AbstractFormController {
    handleGet(res) {
        const internsFormView = new InternsFormView();

        res.render(internsFormView.getTemplate(), { 'this': internsFormView });
   }

    async handlePost(req, res) {
        const { 
            firstName,
            lastName,
            internshipId,
            age,
            specialtyAreaId,
            email,
            phone
        } = req.body;
                
        await Database.runQuery(
            `INSERT INTO Intern (
                First_Name,
                Last_Name, 
                Internship_Id, 
                Age, 
                Specialty_Area_Id, 
                Email, 
                Phone_No
            ) VALUES ( 
                '${firstName}', 
                '${lastName}', 
                '${internshipId}', 
                '${age}', 
                '${specialtyAreaId}', 
                '${email}', 
                '${phone}')`
        );

        res.redirect('/interns');
    }

}