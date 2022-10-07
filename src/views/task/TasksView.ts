import AbstractView from '../AbstractView.js';

import { Task } from '../../abstracts/entities/Task.js';

export default class TasksView extends AbstractView {
    tasks: Task[] = [];
    template = './task/tasks';

    getTasks(): Task[] {
        return this.tasks;
    }

    setTasks(tasks: Task[]) {
        this.tasks = tasks;
        return this;
    }
}