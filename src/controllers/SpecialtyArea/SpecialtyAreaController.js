import SpecialtyAreaView from '../../views/specialty-area/SpecialtyAreaView.js';
import SpecialtyAreaResource from '../../models/resource/SpecialtyAreaResource.js';
import AbstractController from '../AbstractController.js';

export default class SpecialtyAreaController extends AbstractController {
    async handleGet(req, res) {
        const specialtyAreaId = req.query.id;

        if (!this.isIdNumber(specialtyAreaId)) {
            return this.handleIdError(specialtyAreaId, res);
        }

        const specialtyAreaResource = new SpecialtyAreaResource();
        const specialtyArea = await specialtyAreaResource.getSpecialtyAreaById(specialtyAreaId);

        const specialtyAreaView = new SpecialtyAreaView();
        specialtyAreaView
            .setSpecialtyArea(specialtyArea)
            .setTemplate('specialty-area');

        this.renderPage(res, specialtyAreaView);
    }
}
