import AbstractView from '../AbstractView.js';

import { Mentor } from '../../abstracts/entities/Mentor.js';
import { SpecialtyArea } from '../../abstracts/entities/SpecialtyArea.js';
import { Intern } from '../../abstracts/entities/Intern.js';

export default class MentorView extends AbstractView {
    mentor: Mentor | null = null;
    specialty: string | null = null;
    interns: Intern[] = [];
    template: string = './mentor/mentor';

    setMentor(mentor: Mentor) {
        this.mentor = mentor;
        return this;
    }

    getMentor(): Mentor| null {
        return this.mentor;
    }
    
    setMentorSpecialty(specialty: string) {
        this.specialty = specialty;
        return this;
    }

    getMentorSpecialty(): string | null {
        return this.specialty;
    }

    setMentorInterns(interns: Intern[]) {
        this.interns = interns;
        return this;
    }

    getMentorIterns(): Intern[] {
        return this.interns;
    }
}