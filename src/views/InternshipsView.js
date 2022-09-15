import AbstractView from './AbstractView.js';

export default class InternshipsView extends AbstractView {
    constructor() {
        super();
        
        this.template = 'internships';
        this.internships = [];
    }

    getInternships() {
        return this.internships;
    }

    setInternships(internships) {
        this.internships = internships;
    }
}