import Cache from '../cache/Cache.js';
import { ICache } from '../../abstracts/Contract.js';

export default class Service {
    protected cache: ICache;

    constructor() {
        this.cache = Cache.getCacheMode();
    }
}