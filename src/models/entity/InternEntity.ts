import { Intern } from "../../abstracts/entities/Intern";

export default class InternEntity {
    private id: number;
    private firstName: string;
    private lastName: string;
    private internshipId: number;
    private age: number;
    private specialtyAreaId: number;
    private email: string;
    private phone: number;
    private password: string;
    private gender?: string;

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
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.internshipId = internshipId;
        this.age = age;
        this.specialtyAreaId = specialtyAreaId;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.gender = gender;
    }

    public getIntern(): Intern {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            internshipId: this.internshipId,
            age: this.age,
            specialtyAreaId: this.specialtyAreaId,
            email: this.email,
            phone: this.phone,
            password: this.password,
            gender: this.gender
        }
    }

    public getId(): number {
        return this.id;
    }

    public getFirstName(): string {
        return this.firstName;
    }   

    public getLastName(): string {
        return this.lastName;
    }

    public getInternshipId(): number {
        return this.internshipId;
    }

    public getAge(): number {
        return this.age;
    }

    public getSpecialtyAreaId(): number {
        return this.specialtyAreaId;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPhoneNumber(): number {
        return this.phone;
    }

    public getPassword(): string {
        return this.password;
    }

    public getGender(): string {
        return this.gender ?? '-';
    }

    public getInternSummary(): string {
        return `
            ${this.firstName}'s Info:

            Identification - ${this.id},
            First name - ${this.firstName},
            Last Name - ${this.lastName},
            Gender - ${this.gender},
            Age - ${this.age},
            Email - ${this.email},
            Contact Phone - ${this.phone},
            Internship Id - ${this.internshipId},
            Id of Specialty Area - ${this.specialtyAreaId},
            Password - ${this.firstName}'s password has ${this.password.length} characters
        `
    }
} 