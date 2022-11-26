import AbstractView from '../AbstractView.js';

import { Intern, InternProgress } from '../../abstracts/entities/Intern.js';
import { IView } from '../../abstracts/Contract.js';

export default class InternView extends AbstractView implements IView {
    private intern: Intern | null = null;
    private internProgress: InternProgress | null = null; 
    protected template = './intern/add-intern';

    public setIntern(intern: Intern): this {
        this.intern = intern;
        return this;
    }
    
    public getIntern(): Intern | null {
        return this.intern;
    }

    public setInternProgress(internProgress: InternProgress): this {
        this.internProgress = internProgress;
        return this;
    }

    public getInternProgress(): InternProgress | null {
        return this.internProgress;
    }
}