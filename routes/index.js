// ./routes/index.js

const express	= require("express")
const router	= express.Router()

const indexController = require("./../controllers/indexController")

router.get("/", indexController.home)
router.get("/signup", indexController.viewSignup)
router.get("/login", indexController.viewLogin)

module.exports = router