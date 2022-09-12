import AbstractView from './AbstractView.js';

export default class ModulesView extends AbstractView {
    constructor() {
        super();
        
        this.template = 'module';
        this.modules = [
            {
                id: 1,
                title: 'Web/Linux',
                days: 2,
                desc: 'Quisquam quo sit dolorum repellatae. electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                id: 2,
                title: 'Jira/redmine',
                days: 1,
                desc: 'Quisquam quo sit dolorum repellatae. electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                id: 3,
                title: 'Git/Github',
                days: 3,
                desc: 'Quisquam quo sit dolorum repellatae. electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                id: 4,
                title: 'DBMs',
                days: 5,
                desc: 'Quisquam quo sit dolorum repellatae. electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                id: 5,
                title: 'Console Back',
                days: 2,
                desc: 'Quisquam quo sit dolorum repellatae. electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                id: 6,
                title: 'HTML/CSS',
                days: 4,
                desc: 'Quisquam quo sit dolorum repellatae. electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                id: 7,
                title: 'MVC',
                days: 6,
                desc: 'Quisquam quo sit dolorum repellatae. electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            }
        ];
    }

    getModules() {
        return this.modules;
    }
}