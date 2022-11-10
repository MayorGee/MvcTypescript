import { promises as fs } from 'fs';

import ModuleResource from '../resource/ModuleResource.js';
import ModuleConverter from '../../converters/ModuleConverter.js';
import { DbModule, IModuleResource, Module } from '../../abstracts/entities/Module.js';

import { EntityById } from '../../abstracts/Records.js';

const moduleById: EntityById = {};

export default class ModuleProvider {
    moduleResource: IModuleResource;

    constructor() {
        this.moduleResource = new ModuleResource();
    }

    async getModuleById(id: number): Promise<Module> {
        if (moduleById[id]) {
            console.log('Getting module from cache...');
            return moduleById[id] as Module;
        }

        const dbModule: DbModule = await this.moduleResource.getModuleById(id);

        if(!dbModule) {
            throw new Error('Module Not found in Database');
        }

        const module: Module = ModuleConverter.convertDbModule(dbModule);

        moduleById[id] = module;

        return module;
    }

    async getModules(): Promise<Module[]> {
        const cacheFile = './cache/modules.json';

        try {
            const cachedModules: string =  await fs.readFile(cacheFile, { encoding: 'utf-8' });

            if (cachedModules) {
                console.log('Getting Modules from Cache...');
                return JSON.parse(cachedModules);
            }
        } catch {}

        const dbModules = await this.moduleResource.getModules();
        const modules: Module[] = ModuleConverter.convertDbModules(dbModules);

        await fs.writeFile(cacheFile, JSON.stringify(modules));

        return modules;
    }
}