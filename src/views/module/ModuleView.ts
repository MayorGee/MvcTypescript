import AbstractView from '../AbstractView.js';

import { Module } from '../../abstracts/entities/Module.js';

export default class ModuleView extends AbstractView {
    module: Module | null = null;
    template: string = './module/module';

    setModule(module: Module) {
        this.module = module;
        return this;
    }
    
    getModule(): Module | null {
        return this.module;
    }
}