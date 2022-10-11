export interface DbInternship {
    Id: number,
    Internship_Year: number,
    Start_Date: Date,
    End_Date: Date,
    Title: string
}

export interface Internship {
    id: number,
    internshipYear: number,
    startDate: Date,
    endDate: Date,
    title: string
}

export interface IInternshipResource {
    getInternships: () => Promise<DbInternship[]>,
    getInternshipById: (id: number) => Promise<DbInternship>
}