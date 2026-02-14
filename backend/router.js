import express from "express";
import careerController from './controllers/career-controller.js';
import publicationsController from './controllers/publication-controller.js';
let routeHandler = express.Router();


routeHandler.get('/', function (req, res) {
    res.send('sup');
});

routeHandler.use('/publications', publicationsController);
routeHandler.use('/careers', careerController);


export default routeHandler;