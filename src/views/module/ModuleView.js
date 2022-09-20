import AbstractView from '../AbstractView.js';

export default class ModuleView extends AbstractView {
    module = null;

    setModule(module) {
        this.module = module;
    }
    
    getModule() {
        return this.module;
    }
}