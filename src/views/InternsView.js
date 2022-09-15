import AbstractView from './AbstractView.js';

export default class InternsView extends AbstractView {
    constructor() {
        super();

        this.template = 'interns';
        this.interns = [];
    }

    getInterns() {
        return this.interns;
    }

    setInterns(interns) {
        this.interns = interns;
    }
}