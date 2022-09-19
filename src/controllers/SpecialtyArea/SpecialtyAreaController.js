import SpecialtyAreaView from '../../views/specialty-area/SpecialtyAreaView.js';
import SpecialtyAreaResource from '../../models/resource/SpecialtyAreaResource.js';
import AbstractController from '../AbstractController.js';

export default class SpecialtyAreaController extends AbstractController{
    async execute(req, res) {
        const specialtyAreaView = new SpecialtyAreaView();
        const specialtyAreaResource = new SpecialtyAreaResource();
        const id = req.query.id;

        const idIsValid = this.validateId(id, res);

        if(!idIsValid) {
            return;
        }

        const specialtyArea = await specialtyAreaResource.getSpecialtyAreaById(id);

        specialtyAreaView.setSpecialtyArea(specialtyArea);

        res.send(`
            SpecialtyArea Id: ${specialtyArea.Id} <br />
            SpecialtyArea Title: ${specialtyArea.Title} <br />
            SpecialtyArea Class size: ${specialtyArea.Class_Size} <br/>
        `);
    }
}
