import Service from './Service.js';

import InternResource from '../resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';
import { 
    DbIntern, 
    DbInternProgress, 
    IInternResource, 
    IInternService, 
    Intern, 
    InternProgress 
} from '../../abstracts/entities/Intern';

export default class InternService extends Service implements IInternService {
    private internResource: IInternResource;
    private internCacheKey = 'intern';
    private internsCacheKey = 'interns';
    
    constructor() {
        super();

        this.internResource = new InternResource();
    }

    async getInternById(id: number): Promise<Intern> {
        const internCacheKey = this.cache.getEntityCacheKey(`${this.internCacheKey}${id}`);
        const cachedIntern = await this.cache.readCache<Intern>(internCacheKey);

        if (cachedIntern) {
            console.log('Getting intern from cache...');
            return cachedIntern;
        }

        const dbIntern: DbIntern = await this.internResource.getInternById(id);

        if (!dbIntern) {
            throw new Error('Intern Not found in database');
        }

        const intern: Intern = InternConverter.convertDbIntern(dbIntern);

        this.cache.writeCache<Intern>(internCacheKey, intern);

        return intern;
    }

    async getInterns(): Promise<Intern[]> {
        const internsCacheKey = this.cache.getEntityCacheKey(this.internsCacheKey);
    
        const cachedInterns = await this.cache.readCache<Intern[]>(internsCacheKey);

        if (cachedInterns) {
            console.log('Getting Interns from Cache...');
            return cachedInterns;
        }

        const dbInterns: DbIntern[] = await this.internResource.getInterns();
        const interns: Intern[] = InternConverter.convertDbInterns(dbInterns);

        this.cache.writeCache<Intern[]>(internsCacheKey, interns);

        return interns;
    }

    async getFemaleInterns(): Promise<Intern[]> {
        const femaleInternsCacheKey = this.cache.getEntityCacheKey(`female ${this.internsCacheKey}`);
    
        try {
            const cachedFemaleInterns = await this.cache.readCache<Intern[]>(femaleInternsCacheKey);

            if (cachedFemaleInterns) {
                console.log('Getting female interns from Cache...');
                return cachedFemaleInterns;
            }
        } catch {}

        const dbFemaleInterns: DbIntern[] = await this.internResource.getFemaleInterns();
        const femaleInterns: Intern[] = InternConverter.convertDbInterns(dbFemaleInterns);

        this.cache.writeCache<Intern[]>(femaleInternsCacheKey, femaleInterns);

        return femaleInterns;
    }

    async getMaleInterns(): Promise<Intern[]> {
        const maleInternsCacheKey = this.cache.getEntityCacheKey(`male ${this.internsCacheKey}`);
    
        try {
            const cachedMaleInterns = await this.cache.readCache<Intern[]>(maleInternsCacheKey);

            if (cachedMaleInterns) {
                console.log('Getting male interns from Cache...');
                return cachedMaleInterns;
            }
        } catch {}

        const dbMaleInterns: DbIntern[] = await this.internResource.getMaleInterns();
        const maleInterns: Intern[] = InternConverter.convertDbInterns(dbMaleInterns);

        this.cache.writeCache<Intern[]>(maleInternsCacheKey, maleInterns);

        return maleInterns;
    }

    async getInternByEmail(email: string): Promise<Intern> {
        const internCacheKey = this.cache.getEntityCacheKey(`${this.internCacheKey}(email): ${email}`);
        const cachedIntern = await this.cache.readCache<Intern>(internCacheKey);

        if (cachedIntern) {
            console.log('Getting intern from cache...');
            return cachedIntern;
        }

        const dbIntern: DbIntern = await this.internResource.getInternByEmail(email);

        if(!dbIntern) {
            throw new Error('Intern Not found in database');
        }

        const intern: Intern = InternConverter.convertDbIntern(dbIntern);

        this.cache.writeCache<Intern>(internCacheKey, intern);

        return intern;
    }

    async getInternProgressById(id: number): Promise<InternProgress> {
        const internProgressCacheKey = this.cache.getEntityCacheKey(`${this.internCacheKey}${id} Progress`);
        const cachedInternProgress = await this.cache.readCache<InternProgress>(internProgressCacheKey);

        if (cachedInternProgress) {
            console.log('Getting intern progress from cache...');
            return cachedInternProgress;
        }

        const dbInternProgress: DbInternProgress = await this.internResource.getInternProgressById(id);

        if(!dbInternProgress) {
            throw new Error('Intern progress not found in Database');
        }

        const internProgress: InternProgress = InternConverter.convertDbInternProgress(dbInternProgress);

        this.cache.writeCache<InternProgress>(internProgressCacheKey, internProgress);

        return internProgress;
    }

    async addIntern(intern: Intern) { 
        await this.cache.deleteEntityFromCache(`intern${intern.id}`);

        this.internResource.addIntern(intern);
    }

    async updateInternById(intern: Intern) {
        await this.cache.deleteEntityFromCache(`intern${intern.id}`);

        this.internResource.updateInternById(intern);
    }

    async deleteInternById(id: number) {
        await this.cache.deleteEntityFromCache(`intern${id}`);
        
        this.internResource.deleteInternById(id);
    }
}