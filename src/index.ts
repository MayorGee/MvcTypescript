import App from './App.js';

import HomeRouter from './routers/web/HomeRouter.js';
import InternRouter from './routers/web/InternRouter.js';
import InternshipRouter from './routers/web/InternshipRouter.js';
import MentorRouter from './routers/web/MentorRouter.js';
import ModuleRouter from './routers/web/ModuleRouter.js';
import SpecialtyAreaRouter from './routers/web/SpecialtyAreaRouter.js';
import TaskRouter from './routers/web/TaskRouter.js';

import InternApiRouter from './routers/api/InternApiRouter.js';
import MentorApiRouter from './routers/api/MentorApiRouter.js';
import ModuleApiRouter from './routers/api/ModuleApiRouter.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
global.__dirname = dirname(__filename);

const app = new App('dist');
const PORT = 3333;

const Routers = [
    new HomeRouter(),
    new InternRouter(),
    new InternshipRouter(),
    new MentorRouter(),
    new ModuleRouter(),
    new SpecialtyAreaRouter(),
    new TaskRouter(),
    new InternApiRouter(),
    new MentorApiRouter(),
    new ModuleApiRouter()    
];

app.initSession();
app.initBodyParser();
app.initLiquid();
app.initRouters(Routers);
app.listen(PORT);