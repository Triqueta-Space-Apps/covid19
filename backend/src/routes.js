const express = require('express');
const usersController = require('./controllers/userControllers');
const routes = express.Router();

routes.post('/registrar', usersController.register);
routes.get('/users', usersController.list);
routes.post('/login', usersController.login);
module.exports = routes;