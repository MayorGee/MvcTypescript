export default class TaskView {
    task = null;

    setTask(task) {
        this.task = task;
    }
    
    getTask() {
        return this.task;
    }
}