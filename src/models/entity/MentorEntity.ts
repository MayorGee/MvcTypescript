import { Mentor } from "../../abstracts/entities/Mentor";

export default class MentorEntity {
    private id: number;
    private firstName: string;
    private lastName: string;
    private specialtyAreaId: number;
    private password: string;
    private email: string;

    private phone: number;

    constructor({
        id,
        firstName,
        lastName,
        specialtyAreaId,
        email,
        password,
        phone
    }: Mentor) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialtyAreaId = specialtyAreaId;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    public getMentor(): Mentor {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            specialtyAreaId: this.specialtyAreaId,
            email: this.email,
            password: this.password,
            phone: this.phone
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

    public getSpecialtyAreaId(): number {
        return this.specialtyAreaId;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPhoneNumber(): number {
        return this.phone;
    }

    public getMentorSummary(): string {
        return `
            ${this.firstName}'s info:

            Identification - ${this.id}
            First Name - ${this.firstName}
            Last Name - ${this.lastName}
            Email - ${this.email}       
            Specialty Area Id -  ${this.specialtyAreaId}
            Phone Number - ${this.phone}        
        `
    }
}