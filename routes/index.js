// ./routes/index.js

const express	= require("express")
const router	= express.Router()

const indexController = require("./../controllers/indexController")

router.get("/", indexController.home)
router.get("/signup", indexController.signup)
router.get("/login", indexController.login)

module.exports = router