import express from 'express';
import path from 'path';

class App {
    constructor(staticFiles) {
        this.app = express();

        staticFiles.forEach(file => {
            const staticFile = path.join(global.__dirname, file);
            this.app.use(`/${file}`, express.static(staticFile));
        }); 
    }

    listen(port){
        this.app.listen(port);
    }

    initRouter(router) {
       this.app.use(router);
    }
}

export default App;