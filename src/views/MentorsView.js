export default class MentorsView {
    constructor() {
        this.template = 'mentor';
        this.entityName = 'mentor'
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
                title: 'Dima',
                stack: 'QA',
            }
        ];
    }

    getMentors() {
        return this.mentors;
    }

    getTemplate() {
        return this.template;
    }

    getEntityName() {
        return this.entityName;
    }
}