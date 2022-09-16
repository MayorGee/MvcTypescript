import TasksView from '../../views/TasksView.js';
import Database from '../../Database.js';
import AbstractController from '../AbstractController.js';


export default class TasksController extends AbstractController {
    async execute(req, res) {
        const tasksView = new TasksView(); 
        
        const tasks = await Database.runQuery(
            `SELECT * FROM Tasks
            JOIN Specialty_Area
            ON Tasks.Specialty_Area_Id = Specialty_Area.Id
            JOIN Module
            ON Tasks.MOdule_Id = Module.Id`
        );      

        tasksView.setTasks(tasks);

        this.renderPage(res, tasksView);
    }
}