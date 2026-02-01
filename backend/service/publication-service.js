import publicationRepository from '../repository/publication-repository.js';

class PublicationService {

    getAllPublications = async () => {
        try {
            return await publicationRepository.getAllPublications();
        } catch (error) {
            throw error;
        }
    }

    addPublication = async (publicationData) => {
        try {

            const newPublication = await publicationRepository.addPublication(publicationData);
            return newPublication;
        } catch (error) {
            throw error;
        }
    }

    updatePublication = async (id, publicationData) => {
        try {
            const updatedPublication = await publicationRepository.updatePublication(id, publicationData);
            return updatedPublication;
        } catch (error) {
            throw error;
        }
    }
}

export default new PublicationService();