import AbstractView from '../AbstractView.js';

import { Module } from '../../abstracts/entities/Module.js';

export default class ModulesView extends AbstractView {
    modules: Module[] = [];
    template: string = './module/modules';

    getModules(): Module[] {
        return this.modules;
    }

    setModules(modules: Module[]) {
        this.modules = modules;
        return this;
    }
}