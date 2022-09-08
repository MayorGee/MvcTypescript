import App from './App.js';

import IndexRouter from './routes/IndexRouter.js';
import InternRouter from './routes/InternRouter.js';
import InternshipRouter from './routes/InternshipRouter.js';
import MentorRouter from './routes/MentorRouter.js';
import ModuleRouter from './routes/ModuleRouter.js';
import SpecialtyAreaRouter from './routes/SpecialtyAreaRouter.js';
import TaskRouter from './routes/TaskRouter.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const PORT = 3020;
const app = new App();

const indexRouter = new IndexRouter();
const internRouter = new InternRouter();
const internshipRouter = new InternshipRouter();
const mentorRouter = new MentorRouter();
const moduleRouter = new ModuleRouter();
const specialtyAreaRouter = new SpecialtyAreaRouter();
const taskRouter = new TaskRouter();

const __filename = fileURLToPath(import.meta.url);
global.__dirname = dirname(__filename);

app.useRoute(indexRouter.initRoute())
app.useRoute(internRouter.initRoutes());
app.useRoute(internshipRouter.initRoutes());
app.useRoute(mentorRouter.initRoutes());
app.useRoute(moduleRouter.initRoutes());
app.useRoute(specialtyAreaRouter.initRoutes());
app.useRoute(taskRouter.initRoutes());

app.listen(PORT);