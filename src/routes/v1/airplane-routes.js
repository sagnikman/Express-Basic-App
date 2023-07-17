const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post('/', 
       AirplaneMiddlewares.validateCreateRequest,
       AirplaneController.createAirplane);

router.get('/', AirplaneController.getAirplane);

module.exports = router;