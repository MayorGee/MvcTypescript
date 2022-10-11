import AbstractView from '../AbstractView.js';

import { Task } from '../../abstracts/entities/Task.js';
import { IView } from '../../abstracts/Common.js';

export default class TasksView extends AbstractView implements IView {
    private tasks: Task[] = [];
    public template = './task/tasks';

    public getTasks(): Task[] {
        return this.tasks;
    }

    public setTasks(tasks: Task[]): this {
        this.tasks = tasks;
        return this;
    }
}