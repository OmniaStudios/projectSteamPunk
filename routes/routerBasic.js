const express = require('express');
const controllerBasic = require("../controllers/controllerBasic.js")

const router = express.Router();

router.route("/")
    .get(controllerBasic.get_home);

module.exports = router;