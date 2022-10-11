import { DbSpecialtyArea, SpecialtyArea } from "../abstracts/entities/SpecialtyArea";

export default class SpecialtyAreaConverter {
    public static convertDbSpecialtyArea({ 
        Id, 
        Title, 
        Class_Size 
    }: DbSpecialtyArea): SpecialtyArea {
        return {
            id: Id, 
            title: Title, 
            classSize: Class_Size 
        }
    }

    public static convertDbSpecialtyAreas(dbSpecialtyAreas: DbSpecialtyArea[]): SpecialtyArea[] {
        return dbSpecialtyAreas.map(this.convertDbSpecialtyArea);
    }
}