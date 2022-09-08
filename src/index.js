import App from './App.js';

import InternController from './controllers/InternController.js';
import InternshipController from './controllers/InternshipController.js';
import MentorController from './controllers/MentorController.js';
import ModuleController from './controllers/ModuleController.js';
import SpecialtyAreaController from './controllers/SpecialtyAreaController.js';
import TaskController from '../src/controllers/TaskController.js';

import InternsController from './controllers/InternsController.js';
import InternshipsController from './controllers/InternshipsController.js';
import MentorsController from './controllers/MentorsController.js';
import ModulesController from './controllers/ModulesController.js';
import SpecialtyAreasController from './controllers/SpecialtyAreasController.js';
import TasksController from '../src/controllers/TasksController.js';
import IndexController from './controllers/IndexController.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const PORT = 3020;
const app = new App(PORT);

const internController = new InternController();
const internshipController = new InternshipController();
const mentorController = new MentorController();
const moduleController = new ModuleController();
const specialtyAreaController = new SpecialtyAreaController();
const taskController = new TaskController();

const internsController = new InternsController();
const internshipsController = new InternshipsController();
const mentorsController = new MentorsController();
const modulesController = new ModulesController();
const specialtyAreasController = new SpecialtyAreasController();
const tasksController = new TasksController();
const indexController = new IndexController();


const __filename = fileURLToPath(import.meta.url);
global.__dirname = dirname(__filename);


app.sendGetRequest('/intern', internController);
app.sendGetRequest('/internship', internshipController);
app.sendGetRequest('/mentor', mentorController);
app.sendGetRequest('/module', moduleController);
app.sendGetRequest('/specialty-area', specialtyAreaController);
app.sendGetRequest('/task', taskController);

app.RenderPage('/', indexController);
app.RenderPage('/interns', internsController);
app.RenderPage('/internships', internshipsController);
app.RenderPage('/mentors', mentorsController);
app.RenderPage('/modules', modulesController);
app.RenderPage('/specialty-areas', specialtyAreasController);
app.RenderPage('/tasks', tasksController);