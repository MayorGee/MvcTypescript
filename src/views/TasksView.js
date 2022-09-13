import AbstractView from './AbstractView.js';

export default class TasksView extends AbstractView {
    constructor() {
        super();
        
        this.template = 'tasks';
        this.tasks = [
            {
                id: 1,
                title: 'Task1',
                desc: 'Quisquam quo sit dolorum repellatae. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the li',
                difficulty: '41%'
            },
            {
                id: 2,
                title: 'Task2',
                desc: 'Quisquam quo sit dolorum repellatae. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the li',
                difficulty: '25%',
                hint: 'check module 5.2'
            },
            {
                id: 3,
                title: 'Task3',
                desc: 'Quisquam quo sit dolorum repellatae. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the li',
                difficulty: '16%'
            },
            {
                id: 4,
                title: 'Task4',
                desc: 'Quisquam quo sit dolorum repellatae. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the li',
                difficulty: '23%',
                hint: 'check module 2.1'
            }
        ];
    }

    getTasks() {
        return this.tasks;
    }
}