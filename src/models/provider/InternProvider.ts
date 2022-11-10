import { promises as fs } from 'fs';

import InternResource from '../resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';
import { DbIntern, DbInternProgress, IInternResource, Intern, InternProgress } from '../../abstracts/entities/Intern';

import { EntityById } from '../../abstracts/Records.js';

const internById: EntityById = {};
const internByEmail: Record<string, Intern | undefined> = {};
const internProgressById: Record<number, InternProgress | undefined> = {}

export default class InternProvider {
    internResource: IInternResource;

    constructor() {
        this.internResource = new InternResource();
    }

    async getInternById(id: number): Promise<Intern> {
        if (internById[id]) {
            console.log('Getting intern from cache...');
            return internById[id] as Intern;
        }

        const dbIntern: DbIntern = await this.internResource.getInternById(id);

        if(!dbIntern) {
            throw new Error('Intern Not found in Database');
        }

        const intern: Intern = InternConverter.convertDbIntern(dbIntern);

        internById[id] = intern;

        return intern;
    }

    async getInterns(): Promise<Intern[]> {
        const cacheFile = './cache/interns.json';

        try {
            const cachedInterns: string =  await fs.readFile(cacheFile, { encoding: 'utf-8' });

            if (cachedInterns) {
                console.log('Getting Interns from Cache...');
                return JSON.parse(cachedInterns);
            }
        } catch {}

        const dbInterns: DbIntern[] = await this.internResource.getInterns();
        const interns: Intern[] = InternConverter.convertDbInterns(dbInterns);

        await fs.writeFile(cacheFile, JSON.stringify(interns));

        return interns;
    }

    async getFemaleInterns(): Promise<Intern[]> {
        const cacheFile = './cache/femaleInterns.json';

        try {
            const cachedFemaleInterns: string = await fs.readFile(cacheFile, { encoding: 'utf-8' });

            if (cachedFemaleInterns) {
                console.log('Getting Female interns from cache...');
                return JSON.parse(cachedFemaleInterns);
            }
        } catch {}

        const dbFemaleInterns: DbIntern[] = await this.internResource.getFemaleInterns();
        const femaleInterns: Intern[] = InternConverter.convertDbInterns(dbFemaleInterns);

        await fs.writeFile(cacheFile, JSON.stringify(femaleInterns));

        return femaleInterns;
    }

    async getMaleInterns(): Promise<Intern[]> {
        const cacheFile = './cache/maleInterns.json';

        try {
            const cachedMaleInterns: string = await fs.readFile(cacheFile, { encoding: 'utf-8' });

            if (cachedMaleInterns) {
                console.log('Getting Male interns from cache...');
                return JSON.parse(cachedMaleInterns);
            }
        } catch {}

        const dbMaleInterns: DbIntern[] = await this.internResource.getMaleInterns();
        const maleInterns: Intern[] = InternConverter.convertDbInterns(dbMaleInterns);

        await fs.writeFile(cacheFile, JSON.stringify(maleInterns));

        return maleInterns;
    }

    async getInternByEmail(email: string): Promise<Intern> {
        if (internByEmail[email]) {
            console.log('Getting intern from cache...');
            return internByEmail[email] as Intern;
        }

        const dbIntern: DbIntern = await this.internResource.getInternByEmail(email);

        if(!dbIntern) {
            throw new Error('Intern Not found in Database');
        }

        const intern: Intern = InternConverter.convertDbIntern(dbIntern);

        internByEmail[email] = intern;

        return intern;
    }

    async getInternProgressById(id: number): Promise<InternProgress> {
        if (internProgressById[id]) {
            console.log('Getting intern progress from cache...');
            return internProgressById[id] as InternProgress;
        }

        const dbInternProgress: DbInternProgress = await this.internResource.getInternProgressById(id);

        if(!dbInternProgress) {
            throw new Error('Intern progress not found in Database');
        }

        const internProgress: InternProgress = InternConverter.convertDbInternProgress(dbInternProgress);

        internProgressById[id] = internProgress;

        return internProgress;
    }
}