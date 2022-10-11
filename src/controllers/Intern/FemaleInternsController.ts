import AbstractController from '../AbstractController.js';

import InternsView from '../../views/intern/InternsView.js';
import InternResource from '../../models/resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';

import { IController } from '../../abstracts/Common.js';
import { IInternResource } from '../../abstracts/entities/Intern.js';

export default class FemaleInternsController extends AbstractController implements IController {
    protected async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internResource: IInternResource = new InternResource();
        const femaleInterns = await internResource.getFemaleInterns();

        const internsView = new InternsView();
        internsView.setInterns(
            InternConverter.convertDbGenderedInterns(femaleInterns)
        );

        this.renderPage(req, res, internsView);
    }
}