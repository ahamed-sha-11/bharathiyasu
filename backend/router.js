import express from "express";

let routeHandler = express.Router();


routeHandler.get('/', function (req, res) {
    res.send('sup');
});




export default routeHandler;