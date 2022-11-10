import { promises as fs } from 'fs';

import MentorResource from '../resource/MentorResource.js';
import MentorConverter from '../../converters/MentorConverter.js';
import { DbMentor, Mentor, DbMentorSpecialty, MentorSpecialty, IMentorResource } from '../../abstracts/entities/Mentor.js';

import { EntityById } from '../../abstracts/Records.js';
import { DbIntern, Intern } from '../../abstracts/entities/Intern.js';
import InternConverter from '../../converters/InternConverter.js';
import SpecialtyAreaConverter from '../../converters/SpecialtyAreaConverter.js';


const mentorById: EntityById = {};
const mentorByEmail : Record<string, Mentor | undefined> = {};
const mentorStudentsById : Record<number, Intern[]> = {};
const mentorSpecialtyById: Record<number, MentorSpecialty | undefined> = {};

export default class MentorProvider {
    mentorResource: IMentorResource;

    constructor() {
        this.mentorResource = new MentorResource();
    }

    async getMentorById(id: number): Promise<Mentor> {
        if (mentorById[id]) {
            console.log('Getting mentor from cache...');
            return mentorById[id] as Mentor;
        }

        const dbMentor: DbMentor = await this.mentorResource.getMentorById(id);

        if(!dbMentor) {
            throw new Error('Mentor Not found in Database');
        }

        const mentor: Mentor = MentorConverter.convertDbMentor(dbMentor);

        mentorById[id] = mentor;

        return mentor;
    }

    async getMentors(): Promise<Mentor[]> {
        const cacheFile = './cache/mentors.json';

        try {
            const cachedMentors: string =  await fs.readFile(cacheFile, { encoding: 'utf-8' });

            if (cachedMentors) {
                console.log('Getting Mentors from Cache...');
                return JSON.parse(cachedMentors);
            }
        } catch {}

        const dbMentors: DbMentor[] = await this.mentorResource.getMentors();
        const mentors: Mentor[] = MentorConverter.convertDbMentors(dbMentors);

        await fs.writeFile(cacheFile, JSON.stringify(mentors));

        return mentors;
    }

    async getMentorByEmail(email: string): Promise<Mentor> {
        if (mentorByEmail[email]) {
            console.log('Getting mentor from cache...');
            return mentorByEmail[email] as Mentor;
        }

        const dbMentor: DbMentor = await this.mentorResource.getMentorByEmail(email);

        if(!dbMentor) {
            throw new Error('Mentor not found in Database');
        }

        const mentor: Mentor = MentorConverter.convertDbMentor(dbMentor);

        mentorByEmail[email] = mentor;

        return mentor;
    }

    async getMentorStudents(id: number): Promise<Intern[]> {
        if (mentorStudentsById[id]) {
            console.log('Getting mentor\'s students from cache...');
            return mentorStudentsById[id] as Intern[];
        }

        const dbInterns: DbIntern[] = await this.mentorResource.getMentorStudents(id);

        if(!dbInterns) {
           throw new Error('Mentor\'s students not found in database');
        }

        const mentorInterns: Intern[] = InternConverter.convertDbInterns(dbInterns);

        mentorStudentsById[id] = mentorInterns;

        return mentorInterns;
    }

    async getMentorSpecialty(id: number): Promise<MentorSpecialty> {
        if (mentorSpecialtyById[id]) {
            console.log('Getting mentor\'s specialty area from cache...');
            return mentorSpecialtyById[id] as MentorSpecialty;
        }

        const dbMentorSpecialty : DbMentorSpecialty = await this.mentorResource.getMentorSpecialty(id);

        if(!dbMentorSpecialty) {
           throw new Error('Mentor\'s specilaty area not found in database');
        }

        const mentorSpecialty: MentorSpecialty = SpecialtyAreaConverter.convertDbMentorSpecialty(dbMentorSpecialty);

        mentorSpecialtyById[id] = mentorSpecialty;

        return mentorSpecialty;
    }
}