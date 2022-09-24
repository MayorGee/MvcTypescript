import AbstractView from '../AbstractView.js';

export default class InternView extends AbstractView {
    intern = null;
    internProgress = null;
    
    setIntern(intern) {
        this.intern = intern;
        return this;
    }
    
    getIntern() {
        return this.intern;
    }

    setInternProgress(internProgress) {
        this.internProgress = internProgress;
        return this;
    }

    getInternProgress() {
        return this.internProgress;
    }
}