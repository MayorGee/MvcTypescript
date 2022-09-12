import AbstractView from './AbstractView.js';

export default class InternsView extends AbstractView {
    constructor() {
        super();

        this.template = 'interns';
        this.interns = [
            {
                id: 1,
                name: 'Mayowa',
                age: 21,
                gender: 'Male',
                area: 'Frontend'
            },
            {
                id: 2,
                name: 'Igor',
                age: 22,
                gender: 'Male',
                area: 'Frontend'
            },
            {
                id: 3,
                name: 'Vika',
                age: 19,
                gender: 'Female',
                area: 'Frontend'
            },
            {
                id: 4,
                name: 'Alisa',
                age: 20,
                gender: 'Female',
                area: 'Frontend'
            },
            {
                id: 5,
                name: 'Nikita',
                age: 21,
                gender: 'Male',
                area: 'Backend'
            },
            {
                id: 6,
                name: 'Dmitri',
                age: 22,
                gender: 'Male',
                area: 'Backend'
            },
            {
                id: 7,
                name: 'Anna',
                age: 19,
                gender: 'Female',
                area: 'Backend'
            },
            {
                id: 8,
                name: 'Alexandra',
                age: 20,
                gender: 'Male',
                area: 'Backend'
            }
        ];
    }

    getInterns() {
        return this.interns;
    }
}