const express = require("express");

// Internal Imports
const { getLogin } = require("../controller/loginController");

const router = express.Router();

// Login Page
router.get("/", getLogin);

module.exports = router;
