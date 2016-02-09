var express = require('express'),
    router  = new express.Router();

// Require controllers.
var welcomeController = require('../controllers/welcome');
var usersController   = require('../controllers/users');
var tasksController   = require('../controllers/tasks');
// root path:
router.get('/', welcomeController.index);

// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);


///DOCS ROUTES
router.get('/tasks/:id',    tasksController.taskShow);
router.get('/tasks',       tasksController.taskIndex);
router.post('/tasks',      tasksController.taskCreate);



module.exports = router;
