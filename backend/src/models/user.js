const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


//Database schema using mongoose
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
        min:3,
        max:25
    },

    lastName:{
        type: String,
        required: true,
        trim: true,
        min:3,
        max:25
    },

    username:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase : true
    },

    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },

    hash_password:{
        type: String,
        required: true,
    },

    role:{
        type: String,
        enum: ['user','admin'],
        //all users are default are users, not admin or super admins
        default: 'user'
    },

    Contact_Number: {
        type: String
    },

    Profile_Picture:{
        type: String
    }
},{timestamps  : true});

//password compare function
userSchema.virtual('password')
.set(function(password)
{
    this.hash_password = bcrypt.hashSync(password, 10);
});


//virtual function to create fullname using first and last
userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
});
 

//Aunthenticate function
userSchema.methods = {
    authenticate: async function (password) {
      return await bcrypt.compareSync(password, this.hash_password);
    },
  };

module.exports = mongoose.model('User', userSchema);