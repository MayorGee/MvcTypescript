import AbstractView from '../AbstractView.js';

import { Module } from '../../abstracts/entities/Module.js';
import { IView } from '../../abstracts/Common.js';

export default class ModuleView extends AbstractView implements IView {
    private module: Module | null = null;
    public template = './module/module';

    public setModule(module: Module): this {
        this.module = module;
        return this;
    }
    
    public getModule(): Module | null {
        return this.module;
    }
}