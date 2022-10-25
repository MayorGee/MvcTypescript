import WebController from '../WebController.js';

import bcrypt from 'bcrypt';

import InternView from '../../../views/intern/InternView.js';
import InternResource from '../../../models/resource/InternResource.js';

import { IController } from '../../../abstracts/Common.js';
import { IInternResource } from '../../../abstracts/entities/Intern.js';
import { NextFunction, Request, Response } from 'express';

export default class InternSignUpController extends WebController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        const internView = new InternView();
        internView.setTemplate('./intern/intern-sign-up');

        this.renderPage(req, res, internView);
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {
        const internResource: IInternResource = new InternResource();

        const internDetails = req.body;

        const internAlreadyExist = await internResource.getInternByEmail(internDetails.email);
        
        if (internAlreadyExist) {
            return this.sendResponse(res, 409, 'An account exists with this email account already');
        }

        internDetails.password  = await bcrypt.hash(internDetails.password, 12);
            
        internResource.addIntern(internDetails);
        
        res.redirect('/intern-login');
    }
}