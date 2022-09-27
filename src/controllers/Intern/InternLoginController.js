import bcrypt from 'bcrypt';

import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js'; 

export default class InternLoginController extends AbstractController {
    async handleGet(req, res) {
        const internView = new InternView();
        internView.setTemplate('./intern/intern-login');

        this.renderPage(res, internView);
    }

    async handlePost(req, res) {
        const { internEmail, internPassword } = req.body;
        const internResource = new InternResource();

        const registeredIntern = await internResource.getInternByEmail(internEmail);
        
        if (!registeredIntern) {
            return this.redirect({res: res, page: '/intern-sign-up',errorCode: 400, errorMessage: 'You are not registered' });
        }

        const passwordIsCorrect = await bcrypt.compare(internPassword, registeredIntern.Password);
        
        if (!passwordIsCorrect) {
            return this.redirect(res, '/intern-login', 400);
        }
        
        req.session.internId = registeredIntern.Id;
        req.session.role = 'Intern';

        res.redirect('/intern-account');
    }
}