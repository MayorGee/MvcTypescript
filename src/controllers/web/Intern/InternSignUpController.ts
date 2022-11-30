import bcrypt from 'bcrypt';

import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import InternView from '../../../views/intern/InternView.js';
import InternService from '../../../models/service/InternService.js';
import { IInternService } from '../../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class InternSignUpController extends WebController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        const internView = new InternView();
        internView.setTemplate('./intern/intern-sign-up');

        this.renderPage(req, res, internView);
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {
        const internService: IInternService = new InternService();

        const internDetails = req.body;

        try {
            const internAlreadyExist = await internService.getInternByEmail(internDetails.email);
            
            if (internAlreadyExist) {
                return this.returnFailedResponse({
                    res, 
                    errorCode: 409, 
                    errorMessage: 'An account exists with this email account already'
                });
            }
    
            internDetails.password = await bcrypt.hash(internDetails.password, 12);
    
            internService.addIntern(internDetails);
            
            res.redirect('/intern-login');
        } catch(error: any) {
            console.log(error.message);

            this.redirect({ 
                res,
                page: '/intern-sign-up', 
                errorCode: 500,
                errorMessage: 'A server error occurred while Signing you up' 
            });
        }
    }
}