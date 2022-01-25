import express, { Application } from 'express';
import cors from 'cors';

import heroesRoute from '../routes/heroes';
import imagesRoute from '../routes/images';

type paths = {
    heroes: string,
    images: string   
}

class Server {

    private app : Application;
    private port : string;
    private apiPaths : paths = {
        heroes: '/api/heroes',
        images: '/api/images'
    }
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3031';

        this.middlewares();

        this.routes();
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

    routes() {
        this.app.use( this.apiPaths.heroes, heroesRoute);
        this.app.use( this.apiPaths.images, imagesRoute);
    }
}

export default Server;
