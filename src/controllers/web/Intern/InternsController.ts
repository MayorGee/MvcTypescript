import WebController from '../WebController.js';

import InternResource from '../../../models/resource/InternResource.js';
import InternsView from '../../../views/intern/InternsView.js';
import InternConverter from '../../../converters/InternConverter.js';

import { IController } from '../../../abstracts/Common.js';
import { DbIntern, IInternResource } from '../../../abstracts/entities/Intern.js';
import { Response, Request } from 'express';

export default class InternsController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const internResource: IInternResource = new InternResource();
        const interns: DbIntern[] = await internResource.getInterns();     

        const internsView = new InternsView();
        internsView.setInterns(
            InternConverter.convertDbInterns(interns)
        );

        this.renderPage(req, res, internsView);
    }
}

