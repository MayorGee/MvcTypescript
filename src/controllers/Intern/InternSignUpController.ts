import bcrypt from 'bcrypt';

import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';

import { IController } from '../../abstracts/Common.js';

export default class InternSignUpController extends AbstractController implements IController {
    handleGet(req: any, res: any, next: any) {
        const internView = new InternView();
        internView.setTemplate('./intern/intern-sign-up');

        this.renderPage(req, res, internView);
   }

    async handlePost(req: any, res: any, next: any) {
        const internResource = new InternResource();

        const internDetails = req.body;

        const internAlreadyExist = await internResource.getInternByEmail(internDetails.email);
        
        if (internAlreadyExist) {
            return this.sendError(res, 409, 'An account exists with this email account already');
        }

        internDetails.password  = await bcrypt.hash(internDetails.password, 12);
            
        await internResource.addIntern(internDetails);
        
        res.redirect('/intern-login');
    }
}