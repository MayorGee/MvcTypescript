import AbstractController from '../AbstractController.js';

import TaskResource from '../../models/resource/TaskResource.js';
import TaskConverter from '../../converters/TaskConverter.js';
import TasksView from '../../views/task/TasksView.js';

import { IController } from '../../abstracts/Common.js';
import { DbTask } from '../../abstracts/entities/Task.js';

export default class TasksController extends AbstractController implements IController {
    async handleGet(req: any, res: any, next: any) {    
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
           
        const taskResource = new TaskResource();
        const tasks: DbTask[] = await taskResource.getTasks();    

        const tasksView = new TasksView(); 
        tasksView
            .setTasks(
                TaskConverter.convertDbTasks(tasks)
            )
            .setTemplate('./task/tasks');

        this.renderPage(req, res, tasksView);
    }
}