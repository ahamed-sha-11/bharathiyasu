import { Router } from "express";
import publicationService from "../service/publication-service.js";
import validator from "validator";

let publicationsController = Router();

publicationsController.get('/', async (req, res) => {
    try {
        const publications = await publicationService.getAllPublications();
        res.status(200).json(publications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

publicationsController.post('/', async (req, res) => {
    try {
       const clean = (v = "") => validator.trim(v);

        const publicationData = {
            paper_title: clean(req.body.paper_title),
            journal_name: clean(req.body.journal_name),
            volume: clean(req.body.volume),
            issn: clean(req.body.issn),
            indexed_in: clean(req.body.indexed_in),
            publication_date: req.body.publication_date,
            impact_factor: req.body.impact_factor,
            page_start: req.body.page_start,
            page_end: req.body.page_end,
        };

        const newPublication = await publicationService.addPublication(publicationData);
        res.status(201).json(newPublication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

publicationsController.patch('/:id', async (req, res) => {
    try {
        const clean = (v = "") => validator.trim(v);

        const publicationData = {
            paper_title: clean(req.body?.paper_title),
            journal_name: clean(req.body?.journal_name),
            volume: clean(req.body?.volume),
            issn: clean(req.body?.issn),
            indexed_in: clean(req.body?.indexed_in),
            publication_date: req.body?.publication_date,
            impact_factor: req.body?.impact_factor,
            page_start: req.body?.page_start,
            page_end: req.body?.page_end
        };

        const updatedPublication = await publicationService.updatePublication(req.params.id, publicationData);
        res.status(200).json(updatedPublication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default publicationsController;