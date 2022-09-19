import AbstractView from '../AbstractView.js';

export default class InternshipView extends AbstractView {
    internship = null;
    template = null;

    setInternship(internship) {
        this.internship = internship;
    }
    
    getInternship() {
        return this.internship;
    }

    setTemplate(template) {
        this.template = template;
    }
}