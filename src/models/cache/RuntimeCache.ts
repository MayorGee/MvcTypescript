import { ICache } from "../../abstracts/Contract";

let cache: Record<string, any> = {};

export default class RuntimeCache implements ICache {
    public async readCache<T>(entityName: string): Promise<T> {
        return cache[entityName];
    }

    public async writeCache<T>(entityName: string, entity: T): Promise<void> {
        cache[entityName] = entity;
    }

    public async deleteEntityFromCache(entityName: string): Promise<void> {
        delete cache[entityName];
    }

    public async clearCache(): Promise<void> {
        cache = {}
    }

    public getEntityCacheKey(entityName: string): string {
        return entityName;
    }
}