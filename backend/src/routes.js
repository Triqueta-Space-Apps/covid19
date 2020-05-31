const express = require('express');
const usersController = require('./controllers/userControllers');
const routes = express.Router();

routes.post('/registrar', usersController.register);
module.exports = routes;