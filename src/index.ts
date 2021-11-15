import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import {Request, Response} from "express";
import * as cors from 'cors';
import helmet = require("helmet");
const PORT = process.env.PORT || 3000;


createConnection().then(async connection => {

    // create express app
    const app = express();

    // Middlewares

    app.use(cors());;
    app.use(helmet());

    app.use(express.json());

    
    // start express server
    app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
    

}).catch(error => console.log(error));
