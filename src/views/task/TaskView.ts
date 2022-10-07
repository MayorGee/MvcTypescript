import AbstractView from '../AbstractView.js';

import { Task } from '../../abstracts/entities/Task.js';

export default class TaskView extends AbstractView {
    task: Task | null = null;
    template = './task/task';

    setTask(task: Task) {
        this.task = task;
        return this;
    }
    
    getTask(): Task | null {
        return this.task;
    }
}