import careerRepository from '../repository/career-repository.js';

class CareerService {

    async getAllCareers() {
        return careerRepository.getAllCareers();
    }

    async addCareer(careerData) {
        return careerRepository.addCareer(careerData);
    }
}

export default new CareerService();