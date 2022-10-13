import AbstractView from '../AbstractView.js';

import { Internship } from '../../abstracts/entities/Internship.js';
import { IView } from '../../abstracts/Common.js';

export default class InternshipsView extends AbstractView implements IView {
    private internships: Internship[]  = [];
    protected template = './internship/internships';
    
    getInternships(): Internship[]  {
        return this.internships;
    }

    setInternships(internships: Internship[]): this {
        this.internships = internships;
        return this;
    }
}