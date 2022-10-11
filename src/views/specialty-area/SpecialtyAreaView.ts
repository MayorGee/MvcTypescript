import AbstractView from '../AbstractView.js';

import { SpecialtyArea } from '../../abstracts/entities/SpecialtyArea.js';
import { IView } from '../../abstracts/Common.js';

export default class SpecialtyAreaView extends AbstractView implements IView {
    specialtyArea: SpecialtyArea | null = null;
    template = './specialty-area/specialty-area';

    setSpecialtyArea(specialtyArea: SpecialtyArea): this {
        this.specialtyArea = specialtyArea;
        return this;
    }
    
    getSpecialtyArea(): SpecialtyArea | null {
        return this.specialtyArea;
    }
}