import express from 'express';

class App {
    constructor(port) {
        this.app = express();
        this.app.listen(port);
        this.router = express.Router();
    }

    sendGetRequest(path, controller) {
       this.app.get(`${path}`, controller.execute.bind(controller));
    }

    RenderPage(path, controller) {
        this.router.get(`${path}`, controller.execute.bind(controller));
        this.app.use(`${path}`, this.router);
    }
}

export default App;