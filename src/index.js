import App from './App.js';

import IndexRouter from './routers/IndexRouter.js';
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

const staticFiles = ['css', 'images', 'icons'];

const app = new App(staticFiles);

const PORT = 3020;

const ROUTERS = [
    IndexRouter,
    InternRouter,
    InternshipRouter,
    MentorRouter,
    ModuleRouter,
    SpecialtyAreaRouter,
    TaskRouter
];

ROUTERS.forEach(Router => {
    const router = new Router();

    app.initRouter(router.getRoutes());
})

app.listen(PORT);