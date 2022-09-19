import AbstractView from '../AbstractView.js';

export default class UpdateInternView extends AbstractView {
    intern = null;

    constructor() {
        super();
        
        this.template = './intern/update-intern';
    }

    setIntern(intern) {
        this.intern = intern;
    }

    getIntern() {
        return this.intern;
    }
}