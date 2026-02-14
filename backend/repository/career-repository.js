import Career from "../model/career.js";

class careerRepository {

    getAllCareers() {
        return Career.findAll();
    }

    addCareer(careerData) {
        return Career.create(careerData);
    }
}

export default new careerRepository();