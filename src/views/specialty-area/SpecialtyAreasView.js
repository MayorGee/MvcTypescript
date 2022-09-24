import AbstractView from '../AbstractView.js';

export default class SpecialtyAreasView extends AbstractView {
    constructor() {
        super();
        
        this.template = 'specialty-areas';
        this.specialtyAreas = [];
    }

    getSpecialtyAreas() {
        return this.specialtyAreas;
    }

    setSpecialtyAreas(specialtyAreas) {
        this.specialtyAreas = specialtyAreas;
        return this;
    }
}