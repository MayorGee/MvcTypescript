import bcrypt from 'bcrypt';

import WebController from '../WebController.js';

import InternView from '../../../views/intern/InternView.js';
import InternService from '../../../models/service/InternService.js';

import { NextFunction, Request, Response } from 'express';
import { IController } from '../../../abstracts/Contract.js';
import { Role } from '../../../abstracts/Enum.js';

export default class InternLoginController extends WebController implements IController {
    private internView;

    constructor () {
        super();

        this.internView = new InternView();
    }

    protected handleGet(req: Request, res: Response, next: NextFunction) {
        this.internView.setTemplate('./intern/intern-login');

        this.renderPage(req, res, this.internView);
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {
        const { internEmail, internPassword } = req.body;
        
        const internService = new InternService();
        const registeredIntern = await internService.getInternByEmail(internEmail);
        
        if (!registeredIntern) {
            return this.redirect({ 
                res, 
                page: '/intern-sign-up', 
                errorCode: 400, 
                errorMessage: 'You are not registered' 
            });
        }

        const passwordIsCorrect = await bcrypt.compare(internPassword, registeredIntern.password);
        
        if (!passwordIsCorrect) {
            return this.redirect({ 
                res, 
                page: '/intern-login', 
                errorCode: 400 
            });
        }
        
        req.session.internId = registeredIntern.id;
        req.session.role = Role.intern;

        res.redirect('/intern-account');
    }
}