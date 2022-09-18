import TaskResource from '../../models/resource/TaskResource.js';
import TasksView from '../../views/task/TasksView.js';
import AbstractController from '../AbstractController.js';


export default class TasksController extends AbstractController {
    async execute(req, res) {
        const taskResource = new TaskResource();
        const tasksView = new TasksView(); 
        
        const tasks = await taskResource.getTasks();    

        tasksView.setTasks(tasks);

        this.renderPage(res, tasksView);
    }
}