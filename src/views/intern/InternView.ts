import AbstractView from '../AbstractView.js';

import { Intern } from '../../abstracts/entities/Intern.js';

export default class InternView extends AbstractView {
    intern: Intern | null = null;
    internProgress = null; 
    template: string = './intern/intern';

    setIntern(intern: Intern) {
        this.intern = intern;
        return this;
    }
    
    getIntern() {
        return this.intern;
    }

    setInternProgress(internProgress: any) {
        this.internProgress = internProgress;
        return this;
    }

    getInternProgress() {
        return this.internProgress;
    }
}