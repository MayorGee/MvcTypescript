import express from 'express';
import { Liquid } from 'liquidjs';
import bodyParser from 'body-parser';
import path from 'path';

export default class  App {
    constructor(dist) {
        this.app = express();
        this.app.use(express.static(dist));
    }

    listen(port){
        this.app.listen(port, () => {
            console.log(`Server is listening on port: ${port}`);
        });
    }

    initRouters(routers) {
        routers.forEach(Router => {
            const router = new Router();
        
            this.app.use(router.getRouter());
        });     
    }

    initLiquid(){
        const engine = new Liquid();
        
        this.app.engine('liquid', engine.express()); 
        this.app.set('views', path.resolve(__dirname, 'templates')); 
        this.app.set('view engine', 'liquid');
    }

    initBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
}