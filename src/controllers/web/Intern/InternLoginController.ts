import WebController from '../WebController.js';
import bcrypt from 'bcrypt';

import InternView from '../../../views/intern/InternView.js';
import InternResource from '../../../models/resource/InternResource.js';

import { IController, Role } from '../../../abstracts/Common.js';
import { NextFunction, Request, Response } from 'express';

export default class InternLoginController extends WebController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        const internView = new InternView();
        internView.setTemplate('./intern/intern-login');

        this.renderPage(req, res, internView);
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {
        const { internEmail, internPassword } = req.body;
        
        const internResource = new InternResource();
        const registeredIntern = await internResource.getInternByEmail(internEmail);
        
        if (!registeredIntern) {
            return this.redirect({ 
                res, 
                page: '/intern-sign-up', 
                errorCode: 400, 
                errorMessage: 'You are not registered' 
            });
        }

        const passwordIsCorrect = await bcrypt.compare(internPassword, registeredIntern.Password);
        
        if (!passwordIsCorrect) {
            return this.redirect({ 
                res, 
                page: '/intern-login', 
                errorCode: 400 
            });
        }
        
        req.session.internId = registeredIntern.Id;
        req.session.role = Role.intern;

        res.redirect('/intern-account');
    }
}