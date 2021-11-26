// ./controllers/indexController.js
const User		= require("./../models/User")
const bcryptjs = require("bcryptjs")



exports.home = async (req, res) => {
	res.render("home")
}
// Renderiza Singup
exports.viewSignup = async (req, res) => {
	res.render("signup")
}

// Fomrulario Singup funciona
exports.signup = async (req, res) => {

	// 1. OBTENCIÓN DE DATOS DEL FORMULARIO
	const email 	= req.body.email
	const password 	= req.body.password

	if(!email || !password){
		res.render("signup", {
			errorMessage: "Uno o más campos están vacíos. Revísalos nuevamente."
		})

		return
	}

	const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

	if(!regex.test(password)){
		
		res.render("signup", {
			errorMessage: "Tu password debe de contener 6 caracteres, mínimo un número y una mayúscula."
		})		

		return
	}

	// ENCRIPTACIÓN DE PASSWORD 🚩🚩🚩

	try {
		const salt = await bcryptjs.genSalt(10)
		const passwordEncriptado = await bcryptjs.hash(password, salt)
		
		const newUser = await User.create({
			email,
			passwordEncriptado
		}) 

		console.log(newUser)
		
		// 3. REDIRECCIÓN DE USUARIO
		res.redirect("/login")

	} catch (error) {

		console.log(error)

		res.status(500).render("signup", {
			errorMessage: "Hubo un error con la validez de tu correo. Intenta nuevamente. No dejes espacios y usa minúsculas."
		})
	}

}
// Renderiza Login
exports.viewLogin = async (req, res) => {
	res.render("login")
}
// Fomrulario Login funciona
exports.login = async (req, res) => {

	try {
	const email = req.body.email
	const password = req.body.password
	
	const foundUser = await User.findOne({ email })

	if(!foundUser){
		res.render("login", {
			errorMessage: "Email o contraseña sin coincidencia."
		})

		return
	}

	const verifiedPass = await bcryptjs.compareSync(password, foundUser.passwordEncriptado)

	if(!verifiedPass){
		res.render("login", {
			errorMessage: "Email o contraseña errónea. Intenta nuevamente."
		})

		return
	}

	// 4. (PRÓXIMAMENTE) GENERAR LA SESIÓN
	// PERSISTENCIA DE IDENTIDAD
	req.session.currentUser = {
		_id: foundUser._id,
		email: foundUser.email,
		mensaje: "LO LOGRAMOS CARAJO"
	}

	// 5. REDIRECCIONAR AL HOME
	res.redirect("/")


	} catch (error) {
		console.log(error)	
	}
}

