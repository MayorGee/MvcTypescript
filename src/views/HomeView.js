export default class HomeView {
    constructor() {
        this.template = 'home';
        this.entityName = 'home';
        this.sections = [
            {
                id: 1,
                title: 'Introduction',
                desc: 'Quisquam quo sit dolorum repellatae.',
            },
            {
                id: 2,
                title: 'Pricing',
                desc: 'Quisquam quo sit dolorum repellatae.',
            },
            {
                id: 3,
                title: 'Application',
                desc: 'Quisquam quo sit dolorum repellatae.',
            },
            {
                id: 4,
                title: 'Enrollment',
                desc: 'Quisquam quo sit dolorum repellatae.',
            }
        ];
    }

    getSections() {
        return this.sections;
    }

    getTemplate() {
        return this.template;
    }

    getEntityName() {
        return this.entityName;
    }
}