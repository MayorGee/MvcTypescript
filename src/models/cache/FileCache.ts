import { promises as fs } from 'fs';
import { deleteAsync } from 'del'; 
import { ICache } from '../../abstracts/Contract';

export default class FileCache implements ICache {
    private cacheDir = './cache';

    public async readCache<T>(entityName: string): Promise<T | undefined> {
        try {
            const cachedEntity:  string = await fs.readFile(entityName, { encoding: 'utf-8' });
    
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
        await fs.writeFile(entityName, JSON.stringify(entity));
    }

    public async deleteEntityFromCache(entityName: string): Promise<void> {
        try {
            await fs.unlink(entityName);
        } catch(err: any) {
            console.error(err.message);
        }  
    }

    public getEntityCacheKey(entityName: string): string {
        return `${this.cacheDir}/${entityName}.json`;
    }

    public async clearCache(): Promise<void> {
        const deletedFilePaths = await deleteAsync(['cache/*.json']);

        console.log('Files deleted from cache:\n', deletedFilePaths.join('\n'));
    }
}