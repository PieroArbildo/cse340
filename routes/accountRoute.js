// Needed Resources 
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")

const regValidate = require('../utilities/account-validation')

// Route to build 
router.get("/login", utilities.handleErrors(accountController.buildLoggin));

router.get("/register", utilities.handleErrors(accountController.buildRegister));


// Route to handle account registration
// Process the registration data
router.post(
    "/register",
    regValidate.registationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(accountController.registerAccount)
  )

module.exports = router;