import AbstractView from '../AbstractView.js';

export default class SpecialtyAreaView extends AbstractView {
    specialtyArea = null;

    setSpecialtyArea(specialtyArea) {
        this.specialtyArea = specialtyArea;
    }
    
    getSpecialtyArea() {
        return this.specialtyArea;
    }

    setTemplate(template) {
        this.template = template;
    }
}