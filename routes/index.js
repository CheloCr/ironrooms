// ./routes/index.js

const express	= require("express")
const router	= express.Router()

const indexController = require("./../controllers/indexController")

// Página de home
router.get("/", indexController.home)

//Página de Signup
router.get("/signup", indexController.viewSignup)
router.post("/signup",indexController.signup)
// Página de Login
router.get("/login", indexController.viewLogin)
router.post("/login",indexController.login)

module.exports = router