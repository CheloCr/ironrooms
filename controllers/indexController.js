// ./controllers/indexController.js

exports.home = async (req, res) => {
	res.render("home")
}

exports.signup = async (req, res) => {
	res.render("signup")
}
exports.login = async (req, res) => {
	res.render("login")
}