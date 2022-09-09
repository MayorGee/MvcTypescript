import express from 'express';

class App {
    constructor(dist) {
        this.app = express();

        this.app.use(express.static(dist));
    }

    listen(port){
        this.app.listen(port);
    }

    initRouter(router) {
       this.app.use(router);
    }
}

export default App;