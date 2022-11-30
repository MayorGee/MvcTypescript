import { injectable } from 'inversify';
import { IModuleService, Module } from '../../abstracts/entities/Module';

@injectable()
export default class ModuleDummyService implements IModuleService {
    private dummyModules: Module[];

    constructor() {
        this.dummyModules = [
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
        const dummyModuleById = this.dummyModules.find(dummyModule => dummyModule.id === id );
        return dummyModuleById as Module;
    }

    public async getModules(): Promise<Module[]> {
        return this.dummyModules;
    }

    public async addModule(module: Module) {
        this.dummyModules.push(module);
    }

    public async deleteModuleById(id: number) {
        this.dummyModules = this.dummyModules.filter(dummyModule => dummyModule.id !== id );
    }

    public async updateModuleById(module: Module) {
        this.dummyModules = this.dummyModules.map(dummyModule => {
            if (dummyModule.id === module.id) {
                return module;
            }

            return dummyModule;
        })
    }
}