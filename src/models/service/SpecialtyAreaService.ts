import Service from './Service.js';

import SpecialtyAreaResource from '../resource/SpecialtyAreaResource.js';
import SpecialtyAreaConverter from '../../converters/SpecialtyAreaConverter.js';

import { DbSpecialtyArea, ISpecialtyAreaResource, SpecialtyArea } from '../../abstracts/entities/SpecialtyArea.js';

export default class SpecialtyAreaService extends Service {
    private specialtyAreaResource: ISpecialtyAreaResource;
    private specialtyAreaCacheKey = 'specialtyArea';
    private specialtyAreasCacheKey = 'specialtyAreas';

    constructor() {
        super();

        this.specialtyAreaResource = new SpecialtyAreaResource();
    }

    public async getSpecialtyAreaById(id: number): Promise<SpecialtyArea> {
        const specialtyAreaCacheKey = this.cache.getEntityCacheKey(`${this.specialtyAreaCacheKey}${id}`);
        const cachedSpecialtyArea = await this.cache.readCache<SpecialtyArea>(specialtyAreaCacheKey);

        if (cachedSpecialtyArea) {
            console.log('Getting specialty area from cache...');
            return cachedSpecialtyArea;
        }

        const dbSpecialtyArea: DbSpecialtyArea = await this.specialtyAreaResource.getSpecialtyAreaById(id);

        if (!dbSpecialtyArea) {
            throw new Error('Specialty Area Not found in database');
        }

        const specialtyArea: SpecialtyArea = SpecialtyAreaConverter.convertDbSpecialtyArea(dbSpecialtyArea);

        this.cache.writeCache<SpecialtyArea>(specialtyAreaCacheKey, specialtyArea);

        return specialtyArea;
    }

    public async getSpecialtyAreas(): Promise<SpecialtyArea[]> {
        const specialtyAreasCacheKey = this.cache.getEntityCacheKey(this.specialtyAreasCacheKey);
    
        const cachedSpecialtyAreas = await this.cache.readCache<SpecialtyArea[]>(specialtyAreasCacheKey);

        if (cachedSpecialtyAreas) {
            console.log('Getting Specialty Areas from Cache...');
            return cachedSpecialtyAreas;
        }

        const dbSpecialtyAreas: DbSpecialtyArea[] = await this.specialtyAreaResource.getSpecialtyAreas();
        const specialtyAreas: SpecialtyArea[] = SpecialtyAreaConverter.convertDbSpecialtyAreas(dbSpecialtyAreas);

        this.cache.writeCache<SpecialtyArea[]>(specialtyAreasCacheKey, specialtyAreas);

        return specialtyAreas;
    }
}