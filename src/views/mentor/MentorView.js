import AbstractView from '../AbstractView.js';

export default class MentorView extends AbstractView {
    mentor = null;
    specialty = '';
    students = [];

    setMentor(mentor) {
        this.mentor = mentor;
        return this;
    }

    getMentor() {
        return this.mentor;
    }
    
    setMentorSpecialty(specialty) {
        this.specialty = specialty;
        return this;
    }

    getMentorSpecialty() {
        return this.specialty;
    }

    setMentorStudents(students) {
        this.students = students;
        return this;
    }

    getMentorStudents() {
        return this.students;
    }
}