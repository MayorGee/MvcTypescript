import AbstractView from './AbstractView.js';

export default class MentorsFormView extends AbstractView {
    constructor() {
        super();
        
        this.template = './mentor/mentors-form';
    }
}