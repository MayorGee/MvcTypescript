import FileCache from './FileCache.js';
import RedisCache from './RedisCache.js';
import RuntimeCache from './RuntimeCache.js';

import { ICache } from '../../abstracts/Contract.js';
import { CacheMode } from '../../abstracts/Enum.js';
import Environment from '../Environment.js';

export default class Cache {
    public static getCacheClient(): ICache {
        const cacheMode = Environment.getCacheMode();

        if (cacheMode === CacheMode.redis) {
            return new RedisCache();
        }
    
        if (cacheMode === CacheMode.file) {
            return new FileCache();
        }
    
        if (cacheMode === CacheMode.runtime) {
            return new RuntimeCache();
        }

        throw new Error('Invalid cache mode selected');
    }
}