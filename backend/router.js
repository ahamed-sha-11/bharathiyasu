import express from "express";
import eventController from './controllers/event-controller.js';

let routeHandler = express.Router();


routeHandler.get('/', function (req, res) {
    res.send('sup');
});

routeHandler.use('/events', eventController);


export default routeHandler;