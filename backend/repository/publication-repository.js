import Publication from '../model/publications.js';

class PublicationRepository {

    getAllPublications() {
        try {
            return Publication.findAll();
        } catch (error) {
            console.error(error);
        }
    }
}

export default new PublicationRepository();