import Cache from '../cache/Cache.js';
import { ICache } from '../../abstracts/Contract.js';
import { injectable } from 'inversify';

@injectable()
export default abstract class Service {
    protected cache: ICache;

    constructor() {
        this.cache = Cache.getCacheClient();
    }
}