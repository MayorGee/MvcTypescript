import { promises as fs } from 'fs';

import SpecialtyAreaResource from '../resource/SpecialtyAreaResource.js';
import SpecialtyAreaConverter from '../../converters/SpecialtyAreaConverter.js';
import { DbSpecialtyArea, ISpecialtyAreaResource, SpecialtyArea } from '../../abstracts/entities/SpecialtyArea';

import { EntityById } from '../../abstracts/Records.js';

const specialtyAreaById: EntityById = {};

export default class SpecialtyAreaProvider {
    specialtyAreaResource: ISpecialtyAreaResource;

    constructor() {
        this.specialtyAreaResource = new SpecialtyAreaResource();
    }

    async getSpecialtyAreaById(id: number): Promise<SpecialtyArea> {
        if (specialtyAreaById[id]) {
            console.log('Getting Specialty Area from cache...');
            return specialtyAreaById[id] as SpecialtyArea;
        }

        const dbSpecialtyArea: DbSpecialtyArea = await this.specialtyAreaResource.getSpecialtyAreaById(id);

        if(!dbSpecialtyArea) {
            throw new Error('Specialty Area not found in database');
        }

        const specialtyArea: SpecialtyArea = SpecialtyAreaConverter.convertDbSpecialtyArea(dbSpecialtyArea);

        specialtyAreaById[id] = specialtyArea;

        return specialtyArea;
    }

    async getSpecialtyAreas(): Promise<SpecialtyArea[]> {
        const cacheFile = './cache/specialtyAreas.json';

        try {
            const cachedSpecialtyAreas: string =  await fs.readFile(cacheFile, { encoding: 'utf-8' });

            if (cachedSpecialtyAreas) {
                console.log('Getting Specialty Areas from Cache...');
                return JSON.parse(cachedSpecialtyAreas);
            }
        } catch {}

        const dbSpecialtyAreas: DbSpecialtyArea[] = await this.specialtyAreaResource.getSpecialtyAreas();
        const specialtyAreas: SpecialtyArea[] = SpecialtyAreaConverter.convertDbSpecialtyAreas(dbSpecialtyAreas);

        await fs.writeFile(cacheFile, JSON.stringify(specialtyAreas));

        return specialtyAreas;
    }
}