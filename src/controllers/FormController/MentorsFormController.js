import MentorsFormView from '../../views/MentorsFormView.js';
import Database from '../../Database.js';
import AbstractFormController from './AbstractFormController.js';

export default class MentorsFormController  extends AbstractFormController {
    handleGet(res) {
        const mentorsFormView = new MentorsFormView();

        res.render(mentorsFormView.getTemplate(), { 'this': mentorsFormView });
   }

    async handlePost(req, res) {
        const { 
            firstName,
            lastName,
            specialtyAreaId,
            email,
            phone
        } = req.body;
        
       await  Database.runQuery(
            `INSERT INTO Mentor (
                First_Name,
                Last_Name,
                Specialty_Area_Id,
                Email,
                Phone_No
            )
            VALUES (
                '${firstName}',
                '${lastName}',
                '${specialtyAreaId}',
                '${email}',
                '${phone}'
            )`
        );

        res.redirect('/mentors');
    }

}