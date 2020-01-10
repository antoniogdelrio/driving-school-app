const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const checkAuth = require('../middlewares/check-auth');

router.get('/', checkAuth, usersController.get_all_users);

router.get('/:cpf', checkAuth, usersController.get_one_user)

router.post('/', usersController.post_user);

router.post('/login', usersController.login);

module.exports = router;