import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';

import { IController } from '../../abstracts/Common.js';
import { IInternResource } from '../../abstracts/entities/Intern.js';

export default class DeleteInternController extends AbstractController implements IController {
    private resource: IInternResource;

    constructor() {
        super();

        this.resource = new InternResource();
    }

    protected async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internId: number = req.query.id;

        if (!this.isNumber(internId)) {
            return this.handleIdError(internId, res);
        }

        const intern =  await this.resource.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(
                InternConverter.convertDbIntern(intern)
            )
            .setTemplate('./intern/delete-intern');

        this.renderPage(req, res, internView);
   }

   protected  handlePost(req: any, res: any) {
        this.resource.deleteInternById(parseInt(req.body.id));
     
        res.redirect('/interns');
    }
}