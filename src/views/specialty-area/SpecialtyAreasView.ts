import AbstractView from '../AbstractView.js';

import { SpecialtyArea } from '../../abstracts/entities/SpecialtyArea.js';

export default class SpecialtyAreasView extends AbstractView {
    specialtyAreas: SpecialtyArea[] = [];
    template: string = './specialty-area/specialty-areas';

    getSpecialtyAreas(): SpecialtyArea[] | null {
        return this.specialtyAreas;
    }

    setSpecialtyAreas(specialtyAreas: SpecialtyArea[]) {
        this.specialtyAreas = specialtyAreas;
        return this;
    }
}