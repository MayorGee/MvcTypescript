import bcrypt from 'bcrypt';

import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js'; 

export default class LoginController extends AbstractController {
    async handleGet(req, res) {
        const internView = new InternView();
        internView.setTemplate('./intern/login');

        this.renderPage(res, internView);
    }

    async handlePost(req, res) {
        const { userEmail, userPassword } = req.body;
        const internResource = new InternResource();

        const registeredIntern = await internResource.getInternByEmail(userEmail);
        
        if (!registeredIntern) {
            return res.status(404).redirect('/sign-up-intern');
        }

        const passwordIsCorrect = await bcrypt.compare(userPassword, registeredIntern.Password);
        
        if (!passwordIsCorrect) {
            return res.status(404).redirect('/login');
        }
        
        req.session.internId = registeredIntern.Id;
        req.session.role = 'intern';  // if this gets accepted, I'll make login/sign-up page for admin too

        res.redirect('/personal-account');
    }
}