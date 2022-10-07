import AbstractView from '../AbstractView.js';

import { SpecialtyArea } from '../../abstracts/entities/SpecialtyArea.js';

export default class SpecialtyAreaView extends AbstractView {
    specialtyArea: SpecialtyArea | null = null;
    template: string = './specialty-area/specialty-area';

    setSpecialtyArea(specialtyArea: SpecialtyArea) {
        this.specialtyArea = specialtyArea;
        return this;
    }
    
    getSpecialtyArea(): SpecialtyArea | null {
        return this.specialtyArea;
    }
}