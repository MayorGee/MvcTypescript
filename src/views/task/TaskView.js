import AbstractView from '../AbstractView.js';

export default class TaskView extends AbstractView {
    task = null;

    setTask(task) {
        this.task = task;
    }
    
    getTask() {
        return this.task;
    }
}