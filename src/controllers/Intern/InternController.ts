import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';

import { IController } from '../../abstracts/Common.js';
import { DbIntern } from '../../abstracts/entities/Intern.js';

export default class InternController extends AbstractController implements IController {
    async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internId: number = req.query.id;

        if (!this.isNumber(internId)) {
            return this.handleIdError(internId, res);
        }

        const internResource = new InternResource();
        const intern: DbIntern = await internResource.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(
                InternConverter.convertDbIntern(intern)
            )
            .setTemplate('./intern/intern');

        this.renderPage(req, res, internView);
    }
}
