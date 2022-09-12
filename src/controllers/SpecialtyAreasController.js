import SpecialtyAreasView from '../views/SpecialtyAreasView.js';

export default class SpecialtyAreasController {
    execute(req, res) {
        const specialtyAreasView = new SpecialtyAreasView();

        res.render(specialtyAreasView.getTemplate(), { 'this': specialtyAreasView});
    }
}