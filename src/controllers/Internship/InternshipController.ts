import AbstractController from '../AbstractController.js';

import InternshipView from '../../views/internship/InternshipView.js';
import InternshipResource from '../../models/resource/InternshipResource.js';
import InternshipConverter from '../../converters/InternshipConverter.js';

import { IController } from '../../abstracts/Common.js';
import { DbInternship } from '../../abstracts/entities/Internship.js';

export default class InternshipController extends AbstractController implements IController {
    async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internshipId: number = req.query.id;

        if (!this.isNumber(internshipId)) {
            return this.handleIdError(internshipId, res);
        }

        const internshipResource = new InternshipResource();
        const internship: DbInternship = await internshipResource.getInternshipById(internshipId);

        const internshipView = new InternshipView();
        internshipView
            .setInternship(
                InternshipConverter.convertDbInternship(internship)
            )
            .setTemplate('./internship/internship');

        this.renderPage(req, res, internshipView);
    }
}
