const express = require('express');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');



mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]
    }) 
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT);