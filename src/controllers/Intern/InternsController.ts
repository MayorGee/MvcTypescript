import AbstractController from '../AbstractController.js';

import InternResource from '../../models/resource/InternResource.js';
import InternsView from '../../views/intern/InternsView.js';
import InternConverter from '../../converters/InternConverter.js';

import { IController } from '../../abstracts/Common.js';
import { DbIntern } from '../../abstracts/entities/Intern.js';

export default class InternsController extends AbstractController implements IController {
    async handleGet(req: any, res: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const internResource = new InternResource();
        const interns: DbIntern[] = await internResource.getInterns();     

        const internsView = new InternsView();
        internsView.setInterns(
            InternConverter.convertDbInterns(interns)
        );

        this.renderPage(req, res, internsView);
    }
}

