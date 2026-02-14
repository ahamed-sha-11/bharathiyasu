import { Router } from "express";
import  careerService from "../service/career-service.js";
import validator from "validator";

let careerController = Router();

careerController.get('/', async (req, res) => {
    try {
        const careers = await careerService.getAllCareers();
        res.status(200).json(careers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

careerController.post('/', async (req, res) => {
    try {
        const clean = (v = "") => validator.trim(v);
        const careerData = {
            position: clean(req.body.position),
            firm: clean(req.body.firm),
            start_date: req.body.start_date,
            end_date: req.body.end_date
        };

        const newCareer = await careerService.addCareer(careerData);
        res.status(201).json(newCareer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
export default careerController;