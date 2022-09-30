const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');


const { signup,signin, requireSignin } = require('../controllers/admin/auth');


router.post('/signup',signup);

router.post('/signin',signin);





module.exports=router;