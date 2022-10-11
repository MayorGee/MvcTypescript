import express from 'express';
import session from 'express-session';
// @ts-ignore
import { Liquid } from 'liquidjs';
import bodyParser from 'body-parser';
import path from 'path';

export default class  App {
    private app: any;

    constructor(dist: string) {
        this.app = express();
        this.app.use(express.static(dist));
    }

    public listen(port: number){
        this.app.listen(port, () => {
            console.log(`Server is listening on port: ${port}`);
        });
    }

    public initRouters(routers: any) {   
        routers.forEach((Router: new () => any) => {
            const router = new Router();
        
            this.app.use(router.getRouter());
        });     
    }

    public initLiquid(){
        const engine = new Liquid();
        
        this.app.engine('liquid', engine.express()); 
        this.app.set('views', path.resolve(__dirname, 'templates')); 
        this.app.set('view engine', 'liquid');
    }

    public initBodyParser() {
        // @ts-ignore
        this.app.use(bodyParser.json());
        // @ts-ignore
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    public initSession() {
        this.app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: {
                maxAge: 60000
            }        
        }))
    }
}