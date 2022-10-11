import AbstractController from '../AbstractController.js';

import InternResource from '../../models/resource/InternResource.js';
import InternsView from '../../views/intern/InternsView.js';
import InternConverter from '../../converters/InternConverter.js';

import { IController } from '../../abstracts/Common.js';
import { IInternResource } from '../../abstracts/entities/Intern.js';

export default class MaleInternsController extends AbstractController implements IController {
    protected async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const internResource: IInternResource = new InternResource();
        const maleInterns = await internResource.getMaleInterns();

        const internsView = new InternsView();
        internsView.setInterns(
            InternConverter.convertDbGenderedInterns(maleInterns)
        );

        this.renderPage(req, res, internsView);;
    }
}