import TasksView from '../../views/TasksView.js';
import Database from '../../Database.js';
import AbstractController from '../AbstractController.js';

const tasksView = new TasksView(); 

export default class TasksController extends AbstractController {
    async execute(req, res) {
        
        const tasks = await Database.runQuery(
            `SELECT * FROM Tasks
            JOIN Specialty_Area
            ON Tasks.Specialty_Area_Id = Specialty_Area.Id
            JOIN Module
            ON Tasks.MOdule_Id = Module.Id`
        );      

        this.setTasks(tasks);

        this.renderPage(res, tasksView);
    }
    
    async setTasks(tasks) {
        tasksView.setTasks(tasks);
    }
}