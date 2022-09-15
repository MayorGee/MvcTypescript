import AbstractView from './AbstractView.js';

export default class InternsFormView extends AbstractView {
    constructor() {
        super();
        
        this.template = './intern/interns-form';
    }
}