import express, { Application } from 'express';
import cors from 'cors';


class Server {

    private app : Application;
    private port : string;
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3031';
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server run in port ' + this.port);
        });
    }

    middlewares() {

        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );

    }

}

export default Server;
