const express = require('express');
const controllerBasic = require("../controllers/controllerBasic.js")

const router = express.Router();

router.route("/")
    .get(controllerBasic.get_home);

router.route("/devlog")
    .get(controllerBasic.get_devlog);
    
router.route("/about")
    .get(controllerBasic.get_about);

module.exports = router;