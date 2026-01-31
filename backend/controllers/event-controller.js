import { Router } from "express";
import eventService from "../service/event-service.js";

let eventController = Router();

eventController.get('/', eventService.getAllEvents);

export default eventController;