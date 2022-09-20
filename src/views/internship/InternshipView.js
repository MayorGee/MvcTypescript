import AbstractView from '../AbstractView.js';

export default class InternshipView extends AbstractView {
    internship = null;

    setInternship(internship) {
        this.internship = internship;
        return this;
    }
    
    getInternship() {
        return this.internship;
    }
}