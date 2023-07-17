const { AirplaneRepository } = require('../repositories');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}

async function getAirplane(data) {
    try {
        const airplane = await airplaneRepository.get(data.id);
        return airplane;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAirplane,
    getAirplane
}