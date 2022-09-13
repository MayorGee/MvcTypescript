import express from 'express';
import { Liquid } from 'liquidjs';
import path from 'path';


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

    initLiquid(){
        const engine = new Liquid();
        
        this.app.engine('liquid', engine.express()); 
        this.app.set('views', path.resolve(__dirname, 'templates'));            // specify the views directory
        this.app.set('view engine', 'liquid');
    }
}

export default App;