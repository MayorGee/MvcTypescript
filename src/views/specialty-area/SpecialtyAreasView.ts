import AbstractView from '../AbstractView.js';

import { SpecialtyArea } from '../../abstracts/entities/SpecialtyArea.js';
import { IView } from '../../abstracts/Common.js';

export default class SpecialtyAreasView extends AbstractView implements IView {
    private specialtyAreas: SpecialtyArea[] = [];
    protected template = './specialty-area/specialty-areas';

    public getSpecialtyAreas(): SpecialtyArea[] | null {
        return this.specialtyAreas;
    }

    public setSpecialtyAreas(specialtyAreas: SpecialtyArea[]): this {
        this.specialtyAreas = specialtyAreas;
        return this;
    }
}