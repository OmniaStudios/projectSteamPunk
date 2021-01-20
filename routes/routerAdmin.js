const express = require('express');
const controllerAdmin = require('../controllers/controllerAdmin.js');

const router = express.Router();

router.route('/')
    .get(controllerAdmin.get_indexDB);

router.route('/login')
    .get(controllerAdmin.get_login);

router.route('/creaPost')
    .get(controllerAdmin.get_creaPost)
    //.post(controllerAdmin.creaPost);

router.route('/modificaPost')
    .get(controllerAdmin.get_modificaPost)
    //.patch(controllerAdmin.modificaPost);

module.exports = router;