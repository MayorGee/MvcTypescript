import SpecialtyAreaView from '../../views/specialty-area/SpecialtyAreaView.js';
import SpecialtyAreaResource from '../../models/resource/SpecialtyAreaResource.js';

export default class SpecialtyAreaController {
    async execute(req, res) {
        const specialtyAreaView = new SpecialtyAreaView();
        const specialtyAreaResource = new SpecialtyAreaResource();
        const id = req.query.id;

        if (!id) {
            res.redirect('/specialty-areas');

            return;
        }

        const specialtyAreaRes = await specialtyAreaResource.getSpecialtyAreaById(id);
        const specialtyArea = specialtyAreaRes[0];

        specialtyAreaView.setSpecialtyArea(specialtyArea);

        res.send(`
            SpecialtyArea Id: ${specialtyArea.Id} <br />
            SpecialtyArea Title: ${specialtyArea.Title} <br />
            SpecialtyArea Class size: ${specialtyArea.Class_Size} <br/>
        `);
    }
}
