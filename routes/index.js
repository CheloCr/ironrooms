// ./routes/index.js

const express	= require("express")
const router	= express.Router()

const indexController = require("./../controllers/indexController")
const routeGuard		= require("./../middlewares/route-guard")

// Página de home
router.get("/", indexController.home)

//Página de Signup
router.get("/signup", routeGuard.usuarioNoLoggeado,  indexController.viewSignup)
router.post("/signup", routeGuard.usuarioNoLoggeado,  indexController.signup)
// Página de Login
router.get("/login", routeGuard.usuarioNoLoggeado,  indexController.viewLogin)
router.post("/login", routeGuard.usuarioNoLoggeado,  indexController.login)
// Cerrar Sesión
router.get("/logout", routeGuard.usuarioLoggeado,  indexController.logout)


module.exports = router