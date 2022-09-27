import App from './App.js';

import HomeRouter from './routers/HomeRouter.js';
import InternRouter from './routers/InternRouter.js';
import InternshipRouter from './routers/InternshipRouter.js';
import MentorRouter from './routers/MentorRouter.js';
import ModuleRouter from './routers/ModuleRouter.js';
import SpecialtyAreaRouter from './routers/SpecialtyAreaRouter.js';
import TaskRouter from './routers/TaskRouter.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
global.__dirname = dirname(__filename);

const app = new App('dist');
const PORT = 3333;

const routers = [
    HomeRouter,
    InternRouter,
    InternshipRouter,
    MentorRouter,
    ModuleRouter,
    SpecialtyAreaRouter,
    TaskRouter
];

app.initSession();
app.initBodyParser();
app.initLiquid();
app.initRouters(routers);
app.listen(PORT);