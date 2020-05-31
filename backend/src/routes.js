const express = require('express');
const usersController = require('./controllers/usersController');
const postsController = require('./controllers/postsController');
const routes = express.Router();

routes.post('/registrar', usersController.register);
routes.get('/users', usersController.list);
routes.post('/login', usersController.login);

routes.get('/posts', postsController.posts);
routes.post('/create', postsController.create);


module.exports = routes;