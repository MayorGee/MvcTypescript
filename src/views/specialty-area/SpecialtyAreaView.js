import AbstractView from '../AbstractView.js';

export default class SpecialtyAreaView extends AbstractView {
    specialtyArea = null;

    setSpecialtyArea(specialtyArea) {
        this.specialtyArea = specialtyArea;
        return this;
    }
    
    getSpecialtyArea() {
        return this.specialtyArea;
    }
}