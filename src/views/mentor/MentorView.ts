import AbstractView from '../AbstractView.js';

import { Mentor, MentorSpecialty } from '../../abstracts/entities/Mentor.js';
import { Intern } from '../../abstracts/entities/Intern.js';
import { IView } from '../../abstracts/Common.js';

export default class MentorView extends AbstractView implements IView  {
    private mentor: Mentor | null = null;
    private specialty: MentorSpecialty | null = null;
    private interns: Intern[] = [];
    protected template: string = './mentor/mentor';

    public setMentor(mentor: Mentor): this {
        this.mentor = mentor;
        return this;
    }

    public getMentor(): Mentor| null {
        return this.mentor;
    }
    
    public setMentorSpecialty(specialty: MentorSpecialty): this {
        this.specialty = specialty;
        return this;
    }

    public getMentorSpecialty(): MentorSpecialty | null {
        return this.specialty;
    }

    public setMentorInterns(interns: Intern[]): this {
        this.interns = interns;
        return this;
    }

    public getMentorIterns(): Intern[] {
        return this.interns;
    }
}