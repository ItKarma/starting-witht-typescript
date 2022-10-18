import express from 'express';
import morgan from 'morgan';
import rootRouter from './routes';

export default class Application {
    app: express.Application;
    
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
        
    }
    
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
       this.app.use(express.urlencoded({ extended: false }))
    }
    
    routes(){
        this.app.use(rootRouter)
    }
    
    start(){
        this.app.listen(3000, ()=>{
            console.log("Running serve...")
        });
    }
}