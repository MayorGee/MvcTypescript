import bcrypt from 'bcrypt';

import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';

import { IController } from '../../abstracts/Common.js';

export default class InternLoginController extends AbstractController implements IController {
    private resource = new InternResource();

    protected handleGet(req: any, res: any, next: any) {
        const internView = new InternView();
        internView.setTemplate('./intern/intern-login');

        this.renderPage(req, res, internView);
    }

    protected async handlePost(req: any, res: any, next: any) {
        const { internEmail, internPassword } = req.body;
        

        const registeredIntern = await this.resource.getInternByEmail(internEmail);
        
        if (!registeredIntern) {
            return this.redirect({ 
                res, 
                page: '/intern-sign-up', 
                responseCode: 400, 
                errorMessage: 'You are not registered' 
            });
        }

        const passwordIsCorrect = await bcrypt.compare(internPassword, registeredIntern.Password);
        
        if (!passwordIsCorrect) {
            return this.redirect({ 
                res, 
                page: '/intern-login', 
                responseCode: 400 
            });
        }
        
        req.session.internId = registeredIntern.Id;
        req.session.role = 'Intern';

        res.redirect('/intern-account');
    }
}