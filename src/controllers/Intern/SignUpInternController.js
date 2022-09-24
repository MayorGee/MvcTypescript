import bcrypt from 'bcrypt';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class SignUpController extends AbstractController {
    handleGet(req, res) {
        const internView = new InternView();
        internView.setTemplate('./intern/sign-up-intern');

        this.renderPage(res, internView);
   }

    async handlePost(req, res) {
        const internResource = new InternResource();

        const { firstName, lastName, internshipId, age, specialtyAreaId, email, password, phone } = req.body;

        const internAlreadyExist = await internResource.getInternByEmail(email);
        
        if (internAlreadyExist) {
            return res.status(409).send('An account exists with this email account already');
        }

        const hashedPassword = await bcrypt.hash(password, 12);
            
        await internResource.addIntern(firstName, lastName, internshipId, age, specialtyAreaId, email, hashedPassword, phone);
        
        res.redirect('/login');
    }
}