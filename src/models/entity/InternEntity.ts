import { Intern } from "../../abstracts/entities/Intern";

export default class InternEntity {
    private Id: number;
    private First_Name: string;
    private Last_Name: string;
    private Internship_Id: number;
    private Age: number;
    private Specialty_Area_Id: number;
    private Email: string;
    private Phone_No: number;
    private Password: string;
    private Gender?: string;

    constructor({
        id,
        firstName,
        lastName,
        internshipId,
        age,
        specialtyAreaId,
        email,
        phone,
        password,
        gender
    }: Intern) {
        this.Id = id;
        this.First_Name = firstName;
        this.Last_Name = lastName;
        this.Internship_Id = internshipId;
        this.Age = age;
        this.Specialty_Area_Id = specialtyAreaId;
        this.Email = email;
        this.Phone_No = phone;
        this.Password = password;
        this.Gender = gender;
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

    public getInternshipId(): number {
        return this.Internship_Id;
    }

    public getAge(): number {
        return this.Age;
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

    public getPassword(): string {
        return this.Password;
    }

    public getGender(): string {
        return this.Gender ?? '-';
    }

    public getInternSummary(): string {
        return `
            ${this.First_Name}'s Info:

            Identification - ${this.Id},
            First name - ${this.First_Name},
            Last Name - ${this.Last_Name},
            Gender - ${this.Gender},
            Age - ${this.Age},
            Email - ${this.Email},
            Contact Phone - ${this.Phone_No},
            Internship Id - ${this.Internship_Id},
            Id of Specialty Area - ${this.Specialty_Area_Id},
            Password - ${this.First_Name}'s password has ${this.Password.length} characters
        `
    }
} 