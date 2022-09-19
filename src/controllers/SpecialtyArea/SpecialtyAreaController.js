import SpecialtyAreaView from '../../views/specialty-area/SpecialtyAreaView.js';
import SpecialtyAreaResource from '../../models/resource/SpecialtyAreaResource.js';
import AbstractController from '../AbstractController.js';

export default class SpecialtyAreaController extends AbstractController{
    async execute(req, res) {
        const specialtyAreaView = new SpecialtyAreaView();
        const specialtyAreaResource = new SpecialtyAreaResource();
        const specialtyAreaId = req.query.id;

        if (this.isIdInvalid(specialtyAreaId)) {
            return this.handleIdError(specialtyAreaId, res);
        }

        const specialtyArea = await specialtyAreaResource.getSpecialtyAreaById(specialtyAreaId);

        specialtyAreaView.setSpecialtyArea(specialtyArea);
        specialtyAreaView.setTemplate('specialty-area');

        this.renderPage(res, specialtyAreaView);
    }
}
