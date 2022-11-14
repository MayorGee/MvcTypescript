import Cache from '../cache/Cache.js';
import { ICache } from '../../abstracts/Contract.js';

export default abstract class Service {
    protected cache: ICache;

    constructor() {
        this.cache = Cache.getCacheClient();
    }
}