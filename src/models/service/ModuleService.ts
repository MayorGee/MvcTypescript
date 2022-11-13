
import ModuleResource from '../resource/ModuleResource.js';
import ModuleConverter from '../../converters/ModuleConverter.js';
import { DbModule, IModuleResource, IModuleService, Module } from '../../abstracts/entities/Module.js';
import Service from './Service.js';


export default class ModuleService extends Service implements IModuleService {
    private moduleResource: IModuleResource;
    private moduleCacheKey = 'module';
    private modulesCacheKey = 'modules';

    constructor() {
        super();

        this.moduleResource = new ModuleResource();
    }

    async getModuleById(id: number): Promise<Module> {
        const moduleCacheKey = this.cache.getEntityCacheKey(`${this.moduleCacheKey}${id}`);
        const cachedModule = await this.cache.readCache<Module>(moduleCacheKey);

        if (cachedModule) {
            console.log('Getting module from cache...');
            return cachedModule;
        }

        const dbModule: DbModule = await this.moduleResource.getModuleById(id);

        if (!dbModule) {
            throw new Error('Module Not found in database');
        }

        const module: Module = ModuleConverter.convertDbModule(dbModule);

        this.cache.writeCache<Module>(moduleCacheKey, module);

        return module;
    }

    async getModules(): Promise<Module[]> {
        const modulesCacheKey = this.cache.getEntityCacheKey(this.modulesCacheKey);
    
        const cachedModules = await this.cache.readCache<Module[]>(modulesCacheKey);

        if (cachedModules) {
            console.log('Getting Modules from Cache...');
            return cachedModules;
        }

        const dbModules: DbModule[] = await this.moduleResource.getModules();
        const modules: Module[] = ModuleConverter.convertDbModules(dbModules);

        this.cache.writeCache<Module[]>(modulesCacheKey, modules);

        return modules;
    }

    async addModule(module: Module) {
        await this.cache.deleteEntityFromCache(`module${module.id}`);

        this.moduleResource.addModule(module);
    }

    async deleteModuleById(id: number) {
        await this.cache.deleteEntityFromCache(`module${id}`);

        this.moduleResource.deleteModuleById(id);
    }

    async updateModuleById(module: Module) {
        await this.cache.deleteEntityFromCache(`module${module.id}`);
        
        this.moduleResource.updateModuleById(module);
    }
}