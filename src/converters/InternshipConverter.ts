import { DbInternship, Internship } from "../abstracts/entities/Internship";

export default class InternshipConverter {
    public static convertDbInternship({
        Id,
        Internship_Year,
        Start_Date,
        End_Date,
        Title    
    }: DbInternship): Internship {
        return {
            id: Id,
            internshipYear: Internship_Year,
            startDate: Start_Date,
            endDate: End_Date,
            title: Title   
        }
    }

    public static convertDbInternships(dbInternship: DbInternship[]): Internship[] {
        return dbInternship.map(this.convertDbInternship);
    }
}