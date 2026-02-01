import express from "express";
import eventController from './controllers/event-controller.js';
import publicationsController from './controllers/publication-controller.js';
let routeHandler = express.Router();


routeHandler.get('/', function (req, res) {
    res.send('sup');
});

routeHandler.use('/events', eventController);
routeHandler.use('/publications', publicationsController);


export default routeHandler;