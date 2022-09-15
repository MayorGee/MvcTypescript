import AbstractView from './AbstractView.js';

export default class ModulesView extends AbstractView {
    constructor() {
        super();
        
        this.template = 'modules';
        this.modules = [];
    }

    getModules() {
        return this.modules;
    }

    setModules(modules) {
        this.modules = modules;
    }
}