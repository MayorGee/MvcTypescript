import { injectable } from 'inversify';
import { IModuleService, Module } from '../../abstracts/entities/Module';

@injectable()
export default class ModuleDummyService implements IModuleService {
    private DUMMY_MODULES: Module[];

    constructor() {
        this.DUMMY_MODULES = [
            {
                id: 1,
                task: 'Dummy Module 1'
            },
            {
                id: 2,
                task: 'Dummy Module 2'
            },
            {
                id: 3,
                task: 'Dummy MOdule 3'
            },
            {
                id: 4,
                task: 'Dummy Module 4'
            },
        ]
    }

    public async getModuleById(id: number): Promise<Module> {
        const dummyModules = this.DUMMY_MODULES.filter(dummyModule => dummyModule.id === id );
        return dummyModules[0];
    }

    public async getModules(): Promise<Module[]> {
        return this.DUMMY_MODULES;
    }

    public async addModule(module: Module) {
        this.DUMMY_MODULES.push(module);
    }

    public async deleteModuleById(id: number) {
        this.DUMMY_MODULES = this.DUMMY_MODULES.filter(dummyModule => dummyModule.id !== id );
    }

    public async updateModuleById(module: Module) {
        this.DUMMY_MODULES = this.DUMMY_MODULES.map(dummyModule => {
            if (dummyModule.id === module.id) {
                return module;
            }

            return dummyModule;
        })
    }
}