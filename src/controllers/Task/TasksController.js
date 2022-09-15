import TasksView from '../../views/TasksView.js';
import AbstractController from '../AbstractController.js';

export default class TasksController extends AbstractController {
    constructor() {
        super();

        this.view = new TasksView();
        this.query = 
            `SELECT * FROM Tasks
            JOIN Specialty_Area
            ON Tasks.Specialty_Area_Id = Specialty_Area.Id
            JOIN Module
            ON Tasks.MOdule_Id = Module.Id`;
    }
    
    async setData(tasks) {
        this.view.setTasks(tasks);
    }
}