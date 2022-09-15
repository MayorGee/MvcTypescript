import AbstractView from './AbstractView.js';

export default class HomeView extends AbstractView {
    constructor() {
        super();
        
        this.template = 'home';
    }
}