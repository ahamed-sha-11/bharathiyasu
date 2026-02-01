import { Router } from "express";
import publicationService from "../service/publication-service.js";

let publicationsController = Router();

publicationsController.get('/', publicationService.getAllPublications);
export default publicationsController;