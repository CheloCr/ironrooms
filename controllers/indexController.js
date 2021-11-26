// ./controllers/indexController.js

exports.home = async (req, res) => {
	res.render("home")
}

exports.viewSignup = async (req, res) => {
	res.render("signup")
}
exports.viewLogin = async (req, res) => {
	res.render("login")
}