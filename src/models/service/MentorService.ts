import Service from './Service.js';

import MentorResource from '../resource/MentorResource.js';
import MentorConverter from '../../converters/MentorConverter.js';
import { 
    DbMentor, 
    Mentor, 
    DbMentorSpecialty, 
    MentorSpecialty, 
    IMentorResource, 
    IMentorService 
} from '../../abstracts/entities/Mentor.js';

import { DbIntern, Intern } from '../../abstracts/entities/Intern.js';
import InternConverter from '../../converters/InternConverter.js';

import SpecialtyAreaConverter from '../../converters/SpecialtyAreaConverter.js';


export default class MentorService extends Service implements IMentorService {
    private mentorResource: IMentorResource;
    private mentorCacheKey = 'mentor';
    private mentorsCacheKey = 'mentors';

    constructor() {
        super();

        this.mentorResource = new MentorResource();
    }

    public async getMentorById(id: number): Promise<Mentor> {
        const mentorCacheKey = this.cache.getEntityCacheKey(`${this.mentorCacheKey}${id}`);
        const cachedMentor = await this.cache.readCache<Mentor>(mentorCacheKey);

        if (cachedMentor) {
            console.log('Getting mentor from cache...');
            return cachedMentor;
        }

        const dbMentor: DbMentor = await this.mentorResource.getMentorById(id);

        if (!dbMentor) {
            throw new Error('Mentor not found in database');
        }

        const mentor: Mentor = MentorConverter.convertDbMentor(dbMentor);

        this.cache.writeCache<Mentor>(mentorCacheKey, mentor);

        return mentor;
    }

    public async getMentors(): Promise<Mentor[]> {
        const mentorsCacheKey = this.cache.getEntityCacheKey(this.mentorsCacheKey);
    
        const cachedMentors = await this.cache.readCache<Mentor[]>(mentorsCacheKey);

        if (cachedMentors) {
            console.log('Getting Mentors from Cache...');
            return cachedMentors;
        }

        const dbMentors: DbMentor[] = await this.mentorResource.getMentors();
        const mentors: Mentor[] = MentorConverter.convertDbMentors(dbMentors);

        this.cache.writeCache<Mentor[]>(mentorsCacheKey, mentors);

        return mentors;
    }

    public async getMentorByEmail(email: string): Promise<Mentor> {
        const mentorCacheKey = this.cache.getEntityCacheKey(`${this.mentorCacheKey}(email): ${email}`);
        const cachedMentor = await this.cache.readCache<Mentor>(mentorCacheKey);

        if (cachedMentor) {
            console.log('Getting mentor from cache...');
            return cachedMentor;
        }

        const dbMentor: DbMentor = await this.mentorResource.getMentorByEmail(email);

        if(!dbMentor) {
            throw new Error('Mentor Not found in database');
        }

        const mentor: Mentor = MentorConverter.convertDbMentor(dbMentor);
        
        this.cache.writeCache<Mentor>(mentorCacheKey, mentor);

        return mentor;
    }

    public async getMentorStudents(id: number): Promise<Intern[]> {
        const mentorCacheKey = this.cache.getEntityCacheKey(`${this.mentorCacheKey}(students)`);
        const cachedMentor = await this.cache.readCache<Intern[]>(mentorCacheKey);

        if (cachedMentor) {
            console.log('Getting mentor\'s students from cache...');
            return cachedMentor;
        }

        const dbInterns: DbIntern[] = await this.mentorResource.getMentorStudents(id);

        if(!dbInterns) {
           throw new Error('Mentor\'s students not found in database');
        }

        const mentorInterns: Intern[] = InternConverter.convertDbInterns(dbInterns);

        this.cache.writeCache<Intern[]>(mentorCacheKey, mentorInterns)

        return mentorInterns;
    }

    public async getMentorSpecialty(id: number): Promise<MentorSpecialty> {
        const mentorCacheKey = this.cache.getEntityCacheKey(`${this.mentorCacheKey}(specialty)`);
        const cachedMentor = await this.cache.readCache<MentorSpecialty>(mentorCacheKey);

        if (cachedMentor) {
            console.log('Getting mentor\'s specialty area from cache...');
            return cachedMentor;
        }

        const dbMentorSpecialty : DbMentorSpecialty = await this.mentorResource.getMentorSpecialty(id);

        if(!dbMentorSpecialty) {
           throw new Error('Mentor\'s specilaty area not found in database');
        }

        const mentorSpecialty: MentorSpecialty = SpecialtyAreaConverter.convertDbMentorSpecialty(dbMentorSpecialty);

        this.cache.writeCache<MentorSpecialty>(mentorCacheKey, mentorSpecialty);

        console.log("mentor specialty --> ", mentorSpecialty);
        return mentorSpecialty;
    }

    public async addMentor(mentor: Mentor) {
        await this.cache.deleteEntityFromCache(`${this.mentorCacheKey}${mentor.id}`);
        await this.cache.deleteEntityFromCache(`${this.mentorsCacheKey}`);

        this.mentorResource.addMentor(mentor);
    }

    public async updateMentorById(mentor: Mentor) {
        await this.cache.deleteEntityFromCache(`${this.mentorCacheKey}${mentor.id}`);
        await this.cache.deleteEntityFromCache(`${this.mentorsCacheKey}`);

        this.mentorResource.updateMentorById(mentor);
    }

    public async deleteMentorById(id: number) {
        await this.cache.deleteEntityFromCache(`${this.mentorCacheKey}${id}`);
        await this.cache.deleteEntityFromCache(`${this.mentorsCacheKey}`);

        this.mentorResource.deleteMentorById(id);
    }
}