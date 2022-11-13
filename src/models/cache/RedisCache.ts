import { createClient } from 'redis';
import { ICache } from '../../abstracts/Contract.js';
import Environment from '../Environment.js';

export default class RedisCache implements ICache {
    private redisClient;

    constructor() {
        this.redisClient = createClient({
            socket: {
                host: Environment.getRedisHost(),
                port: Number(Environment.getRedisPort())            
            },
            password: Environment.getRedisPassword()
        });
    }

    public async readCache<T>(entityName: string): Promise<T | undefined> {
        try {
            await this.connectClient();

            const cachedEntity = await this.redisClient.get(entityName);

            if (cachedEntity) {
                return JSON.parse(cachedEntity);
            } else {
                return;
            }
            
        } catch(err: any) {
            console.error(err.message);
        }
    }

    public async writeCache<T>(entityName: string, entity: T): Promise<void> {
        try {
            await this.connectClient();

            await this.redisClient.set(entityName, JSON.stringify(entity));
        } catch(err: any) {
            console.error(err.message);
        }
    }

    public async deleteEntityFromCache(entityName: string): Promise<void> {
        try {
            await this.connectClient();

            await this.redisClient.del(entityName);
        } catch(err: any) {
            console.error(err.message);
        }
    }

    public async clearCache(): Promise<void> {
        try {
            await this.connectClient();

            await this.redisClient.flushDb();
        } catch (err: any){
            console.log(err.message);
        }
    }

    public getEntityCacheKey(entityName: string): string {
        return entityName;
    }

    protected async connectClient() {
        await this.redisClient.connect();
    }

}