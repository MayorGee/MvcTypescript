import AbstractView from '../AbstractView.js';

export default class InternUpdateView extends AbstractView {
    intern = null;

    constructor() {
        super();
        
        this.template = './intern/intern-update';
    }

    setIntern(intern) {
        this.intern = intern;
    }

    getIntern() {
        return this.intern;
    }
}