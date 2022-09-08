import express from 'express';
import path from 'path';

class App {
    constructor() {
        this.app = express();
    }

    listen(port){
        this.app.listen(port);
    }

    useRoute(router) {
       this.app.use(router);
       
       let stylePath = path.join(global.__dirname, 'css');
       this.app.use('/css', express.static(stylePath));
    }
}

export default App;