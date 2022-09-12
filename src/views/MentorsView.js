import AbstractView from './AbstractView.js';

export default class MentorsView extends AbstractView {
    constructor() {
        super();

        this.template = 'mentor';
        this.mentors = [
            {
                id: 1,
                name: 'Vlad',
                stack: 'Backend',
            },
            {
                id: 2,
                name: 'Sergey',
                stack: 'Frontend',
            },
            {
                id: 3,
                name: 'Victor',
                stack: 'DevOps',
            },
            {
                id: 4,
                name: 'Dima',
                stack: 'QA',
            }
        ];
    }

    getMentors() {
        return this.mentors;
    }
}