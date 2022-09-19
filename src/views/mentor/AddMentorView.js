import AbstractView from '../AbstractView.js';

export default class AddMentorView extends AbstractView {
    constructor() {
        super();
        
        this.template = './mentor/add-mentor';
    }
}