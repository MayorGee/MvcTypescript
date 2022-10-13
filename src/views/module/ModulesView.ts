import AbstractView from '../AbstractView.js';

import { Module } from '../../abstracts/entities/Module.js';
import { IView } from '../../abstracts/Common.js';

export default class ModulesView extends AbstractView implements IView {
    private modules: Module[] = [];
    protected template = './module/modules';

    public getModules(): Module[] {
        return this.modules;
    }

    public setModules(modules: Module[]): this {
        this.modules = modules;
        return this;
    }
}