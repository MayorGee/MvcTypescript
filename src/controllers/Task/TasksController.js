import TaskResource from '../../models/resource/TaskResource.js';
import TasksView from '../../views/task/TasksView.js';
import AbstractController from '../AbstractController.js';

export default class TasksController extends AbstractController {
    async handleGet(req, res) {    
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
           
        const taskResource = new TaskResource();
        const tasks = await taskResource.getTasks();    

        const tasksView = new TasksView(); 
        tasksView
            .setTasks(tasks)
            .setTemplate('./task/tasks');

        this.renderPage(res, tasksView);
    }
}