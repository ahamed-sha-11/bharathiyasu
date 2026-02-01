import publicationRepository from '../repository/publication-repository.js';

class PublicationService {

    getAllPublications = async (req, res) => {
        try {
            const publications = await publicationRepository.getAllPublications();
            res.status(200).json(publications);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new PublicationService();