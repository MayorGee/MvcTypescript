import AbstractView from '../AbstractView.js';

export default class TaskView extends AbstractView {
    task = null;

    setTask(task) {
        this.task = task;
        return this;
    }
    
    getTask() {
        return this.task;
    }
}