import express from 'express';
import morgan from 'morgan';
import router from './routes';

export default class Application {
    app: express.Application;
    
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
        
    }
    
    middlewares(){
        this.app.use(morgan('dev'));
    }
    
    routes(){
        this.app.use(router)
    }
    
    start(){
        this.app.listen(3000, ()=>{
            console.log("Running serve...")
        });
    }
}