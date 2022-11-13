import AbstractView from '../AbstractView.js';

import { SpecialtyArea } from '../../abstracts/entities/SpecialtyArea.js';
import { IView } from '../../abstracts/Contract.js';

export default class SpecialtyAreaView extends AbstractView implements IView {
    private specialtyArea: SpecialtyArea | null = null;
    protected template = './specialty-area/specialty-area';

    public setSpecialtyArea(specialtyArea: SpecialtyArea): this {
        this.specialtyArea = specialtyArea;
        return this;
    }
    
    public getSpecialtyArea(): SpecialtyArea | null {
        return this.specialtyArea;
    }
}