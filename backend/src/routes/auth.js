//importing the required files and frameworks
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

//signup and signin function will ba called via the auth in admin
const { signup,signin, requireSignin } = require('../controllers/admin/auth');
const { validateRequest, isRequestValidated } = require('../validators/auth');

//path to user pages
//When user request a particular controller, that will be executed

//Checking Each fields, everytime when creating a new user
router.post('/signup',validateRequest,isRequestValidated, signup);
router.post('/signin',signin);


module.exports=router;