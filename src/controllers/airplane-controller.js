const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');


/**
 * POST: /airplanes
 * req-body: { modelNumber: 'airbus320', capacity: 200 }
 */

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully created an airplane',
                    data: airplane,
                    error: {}
                });
    } catch (error) {
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                    message: 'Something went wrong while creating airplane',
                    data: {},
                    error: error
                });
    }
}

async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane({
            id: req.body.id,
        });
        return res
                .status(StatusCodes.OK)
                .json({
                    success: true,
                    message: 'Successfully got an airplane',
                    data: airplane,
                    error: {}
                });
    } catch (error) {
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                    message: 'Something went wrong while getting airplane',
                    data: {},
                    error: error
                });
    }
}

module.exports = {
    createAirplane,
    getAirplane
}