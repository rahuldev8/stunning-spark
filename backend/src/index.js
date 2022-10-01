const express = require('express'); //importing express js for RESTful API's
const app = express(); //creating an app using express
const env = require("dotenv"); //dotenv for database authentication
const bodyParser = require('body-parser'); //body-parser as a middleware
const mongoose = require('mongoose'); //importing mongoose (a data modelling library)


const authRoutes = require('./routes/auth'); //routes for normal user
const adminRoutes = require('./routes/admin/auth'); //routes for admin user

//env file id configured to current index
env.config();

app.use(express.json());


//mongo db Connection key
mongoose.connect(
    `mongodb+srv://${process.env.MANGO_DB_USER}:${process.env.MANGO_DB_PASSWORD}@supreme-cluster.wlw3g3k.mongodb.net/${process.env.MANGO_DB_DATABASE}?retryWrites=true&w=majority`
).then(() => {
   console.log('Database Connected Successfully ');
});

//redirected to admin or user routes
app.use('/api',authRoutes);
app.use('/api',adminRoutes);

//used to find the current port Number which the site is running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });