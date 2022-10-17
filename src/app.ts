import express from 'express';

export default class Application {
    app: express.Application;
    
    constructor(){
        this.app = express()
    }
    
    start(){
        this.app.listen(3000, ()=>{
            console.log("Running serve...")
        });
    }
}