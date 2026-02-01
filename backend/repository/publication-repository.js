import Publication from '../model/publications.js';

class PublicationRepository {

    getAllPublications() {
        try {
            return Publication.findAll();
        } catch (error) {
            console.error(error);
        }
    }

    addPublication(publicationData) {
        try {
            return Publication.create(publicationData);
        } catch (error) {
            console.error(error);
        }
    }

    updatePublication(id, publicationData) {
        try {
           
            const filteredData = Object.fromEntries(
                Object.entries(publicationData).filter(([key, value]) => value != null && value !== '')
            );
            
            return Publication.update(filteredData, {
                where: { id: id },
                returning: true,
                plain: true
            }).then(result => result[1]);
        } catch (error) {
            console.error(error);
        }
    }
}

export default new PublicationRepository();