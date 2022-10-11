import AbstractController from '../AbstractController.js';

import InternshipResource from '../../models/resource/InternshipResource.js';
import InternshipsView from '../../views/internship/InternshipsView.js';

import { IController } from '../../abstracts/Common.js';
import { DbInternship, IInternshipResource } from '../../abstracts/entities/Internship.js';
import InternshipConverter from '../../converters/InternshipConverter.js';

export default class InternshipsController extends AbstractController implements IController {    
    protected async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const internshipResource: IInternshipResource = new InternshipResource();
        const internships: DbInternship[] = await internshipResource.getInternships();
        
        const internshipsView  = new InternshipsView();
        internshipsView
            .setInternships(
                InternshipConverter.convertDbInternships(internships)
            )
            .setTemplate('./internship/internships');

        this.renderPage(req, res, internshipsView);
    }
}