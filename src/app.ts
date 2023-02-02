import express, { Application } from 'express';
import morgan from 'morgan';

import IndexRoute from './routes/index.routes'
import PostRoute from './routes/post.routes'

export class App {

    private app: Application;


    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();

    }
    
    settings (){
        this.app.set('port', this.port || process.env.PORT || 3000);
    } 

    middlewares() {
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use(IndexRoute);
        this.app.use('/posts',PostRoute);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Sever on port',this.app.get('port'));
    }
    
}