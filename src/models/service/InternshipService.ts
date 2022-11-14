import InternshipResource from '../resource/InternshipResource.js';
import InternshipConverter from '../../converters/InternshipConverter.js';
import { DbInternship, IInternshipResource, IInternshipService, Internship } from '../../abstracts/entities/Internship';
import Service from './Service.js';

export default class InternshipService extends Service implements IInternshipService {
    private internshipResource: IInternshipResource;
    private internshipCacheKey = 'internship';
    private internshipsCacheKey = 'internships';

    constructor() {
        super();

        this.internshipResource = new InternshipResource();
    }

    public async getInternshipById(id: number): Promise<Internship> {
        const internshipCacheKey = this.cache.getEntityCacheKey(`${this.internshipCacheKey}${id}`);
        const cachedInternship = await this.cache.readCache<Internship>(internshipCacheKey);

        if (cachedInternship) {
            console.log('Getting internship from cache...');
            return cachedInternship;
        }

        const dbInternship: DbInternship = await this.internshipResource.getInternshipById(id);

        if (!dbInternship) {
            throw new Error('Internship Not found in database');
        }

        const internship: Internship = InternshipConverter.convertDbInternship(dbInternship);

        this.cache.writeCache<Internship>(internshipCacheKey, internship);

        return internship;
    }

    public async getInternships(): Promise<Internship[]> {
        const internshipsCacheKey = this.cache.getEntityCacheKey(this.internshipsCacheKey);
    
        const cachedInternships = await this.cache.readCache<Internship[]>(internshipsCacheKey);

        if (cachedInternships) {
            console.log('Getting Internships from Cache...');
            return cachedInternships;
        }

        const dbInternships: DbInternship[] = await this.internshipResource.getInternships();
        const internships: Internship[] = InternshipConverter.convertDbInternships(dbInternships);

        this.cache.writeCache<Internship[]>(internshipsCacheKey, internships);

        return internships;
    }
}