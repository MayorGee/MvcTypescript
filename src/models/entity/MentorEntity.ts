import { Mentor } from "../../abstracts/entities/Mentor";

export default class MentorEntity {
    private Id: number;
    private First_Name: string;
    private Last_Name: string;
    private Specialty_Area_Id: number;
    private Email: string;
    private Phone_No: number;

    constructor({
        id,
        firstName,
        lastName,
        specialtyAreaId,
        email,
        phone
    }: Mentor) {
        this.Id = id;
        this.First_Name = firstName;
        this.Last_Name = lastName;
        this.Specialty_Area_Id = specialtyAreaId;
        this.Email = email;
        this.Phone_No = phone;
    }

    public getId(): number {
        return this.Id;
    }

    public getFirstName(): string {
        return this.First_Name;
    }

    public getLastName(): string {
        return this.Last_Name;
    }

    public getSpecialtyAreaId(): number {
        return this.Specialty_Area_Id;
    }

    public getEmail(): string {
        return this.Email;
    }

    public getPhoneNumber(): number {
        return this.Phone_No;
    }

    public getMentorSummary(): string {
        return `
            ${this.First_Name}'s info:

            Identification - ${this.Id}
            First Name - ${this.First_Name}
            Last Name - ${this.Last_Name}
            Email - ${this.Email}       
            Specialty Area Id -  ${this.Specialty_Area_Id}
            Phone Number - ${this.Phone_No}        
        `
    }
}