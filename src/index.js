const express = require('express');
const app = express();
const env = require("dotenv");
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //importing mongoose (a data modelling library)


const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

//env file id configured to current index
env.config();

app.use(express.json());

mongoose.connect(
    `mongodb+srv://${process.env.MANGO_DB_USER}:${process.env.MANGO_DB_PASSWORD}@supreme-cluster.wlw3g3k.mongodb.net/${process.env.MANGO_DB_DATABASE}?retryWrites=true&w=majority`
).then(() => {
   console.log('Database Connected Successfully ');
});


app.use('/api',authRoutes);
app.use('/api',adminRoutes);

//used to find the current port Number which the site is running #2002
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });