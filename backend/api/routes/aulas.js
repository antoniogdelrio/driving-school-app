const express = require('express');
const router = express.Router();
const aulasController = require('../controllers/aulas');
const checkAuth = require('../middlewares/check-auth');

router.get('/', checkAuth, aulasController.get_all_aulas);

router.get('/:cpf/:categoria', checkAuth, aulasController.get_category_aula);

router.post('/', checkAuth, aulasController.post_aula);

module.exports = router;