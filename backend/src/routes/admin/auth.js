//importing the required files and frameworks
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/user');

//signup and signin function will ba called via the auth in admin
const { signup,signin, requireSignin } = require('../../controllers/admin/auth');

//path to admin pages
router.post('/admin/signup',signup);
router.post('/admin/signin',signin);


module.exports=router;