var db = require("../models");
var passport = require("passport-local");
var app = express.Router();

// app/routes.js

// =====================================
// LOGIN ===============================
// =====================================
// show the login form
app.get('/login', function(req, res) {
	db.user.findAll({}).then(function(login) {
	// render the page
		res.json(login);
	});
});

// process the login form
app.post('/login', passport.authenticate('local-login', {
	successRedirect : '/profile', // redirect to the secure profile section
	failureRedirect : '/login', // redirect back to the signup page if there is an error
	failureFlash : true // allow flash messages
}));

// =====================================
// SIGNUP ==============================
// =====================================
// show the signup form
app.get('/signup', function(req, res) {
	db.user.findAll({}).then(function(login) {
		res.render(signup);
	});
});

// process the signup form
app.post('/signup', passport.authenticate('local-signup', {
	successRedirect : '/profile', // redirect to the secure profile section
	failureRedirect : '/signup', // redirect back to the signup page if there is an error
	failureFlash : true // allow flash messages
}));

// =====================================
// PROFILE SECTION =========================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
app.get('/profile', isLoggedIn, function(req, res) {
	res.render('profile.ejs', {
		user : req.user // get the user out of session and pass to template
	});
});

// =====================================
// LOGOUT ==============================
// =====================================
app.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
};

module.exports = app;
