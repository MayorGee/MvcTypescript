import AbstractView from '../AbstractView.js';

import { Task } from '../../abstracts/entities/Task.js';
import { IView } from '../../abstracts/Contract.js';

export default class TaskView extends AbstractView implements IView {
    private task: Task | null = null;
    protected template = './task/task';

    public setTask(task: Task): this {
        this.task = task;
        return this;
    }
    
    public getTask(): Task | null {
        return this.task;
    }
}