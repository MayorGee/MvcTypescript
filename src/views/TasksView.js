import AbstractView from './AbstractView.js';

export default class TasksView extends AbstractView {
    constructor() {
        super();
        
        this.template = 'tasks';
        this.tasks = [];
    }

    getTasks() {
        return this.tasks;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }
}