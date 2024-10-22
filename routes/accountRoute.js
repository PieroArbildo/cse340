// Needed Resources 
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")

// Route to build 
router.get("/login", utilities.handleErrors(accountController.buildLoggin));

router.get("/register", utilities.handleErrors(accountController.buildRegister));


// Route to handle account registration
router.post('/register', utilities.handleErrors(accountController.registerAccount))
module.exports = router;