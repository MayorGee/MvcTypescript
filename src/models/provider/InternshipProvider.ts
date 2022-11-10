import { promises as fs } from 'fs';

import InternshipResource from '../resource/InternshipResource.js';
import InternshipConverter from '../../converters/InternshipConverter.js';
import { DbInternship, IInternshipResource, Internship } from '../../abstracts/entities/Internship';

import { EntityById } from '../../abstracts/Records.js';

const internshipById: EntityById = {};

export default class InternshipProvider {
    internshipResource: IInternshipResource;

    constructor() {
        this.internshipResource = new InternshipResource();
    }

    async getInternshipById(id: number): Promise<Internship> {
        if (internshipById[id]) {
            console.log('Getting internship from cache...');
            return internshipById[id] as Internship;
        }

        const dbInternship: DbInternship = await this.internshipResource.getInternshipById(id);

        if(!dbInternship) {
            throw new Error('Internship not found in database');
        }

        const internship: Internship = InternshipConverter.convertDbInternship(dbInternship);

        internshipById[id] = internship;

        return internship;
    }

    async getInternships(): Promise<Internship[]> {
        const cacheFile = './cache/internships.json';

        try {
            const cachedInternships: string =  await fs.readFile(cacheFile, { encoding: 'utf-8' });

            if (cachedInternships) {
                console.log('Getting Internships from Cache...');
                return JSON.parse(cachedInternships);
            }
        } catch {}

        const dbInternships: DbInternship[] = await this.internshipResource.getInternships();
        const internships: Internship[] = InternshipConverter.convertDbInternships(dbInternships);

        await fs.writeFile(cacheFile, JSON.stringify(internships));

        return internships;
    }
}