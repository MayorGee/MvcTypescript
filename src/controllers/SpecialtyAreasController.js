import SpecialtyAreasView from "../views/SpecialtyAreasView.js";

export default class SpecialtyAreasController {
    execute(req, res) {
        const specialtyAreasView = new SpecialtyAreasView();
        
        const specialtyAreasViewTemplate = specialtyAreasView.getTemplate()

        res.render(specialtyAreasViewTemplate, { 'this': specialtyAreasView});
    }
}