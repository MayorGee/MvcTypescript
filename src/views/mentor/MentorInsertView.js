import AbstractView from '../AbstractView.js';

export default class MentorInsertView extends AbstractView {
    constructor() {
        super();
        
        this.template = './mentor/mentor-insert';
    }
}