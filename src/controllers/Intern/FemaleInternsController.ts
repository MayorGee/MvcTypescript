import AbstractController from '../AbstractController.js';

import InternsView from '../../views/intern/InternsView.js';
import InternResource from '../../models/resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';

import { IController } from '../../abstracts/Common.js';

export default class FemaleInternsController extends AbstractController implements IController {
    async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internResource = new InternResource();
        const femaleInterns = await internResource.getFemaleInterns();

        const internsView = new InternsView();
        internsView.setInterns(
            InternConverter.convertDbInterns(femaleInterns)
        );

        this.renderPage(req, res, internsView);
    }
}