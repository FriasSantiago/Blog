const express      = require('express');
const partials     = require('express-partials');
const bodyParser   = require('body-parser');
const passport     = require('passport');
const flash        = require('express-flash');
const session      = require('express-session');
const app          = express();
const { secret }   = require('./keys');
// Settings
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;

//Inits
require('./dbconn');
require('./passport/auth');

// Middleware
app.use(session({  
  secret: secret.KEY,
  resave: false,
  saveUninitialized: false
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(passport.initialize());
app.use(passport.session());  
app.use(partials()); 
app.use(flash()); 
app.use('/assets', express.static('views/assets'));

// Get routes 
app.use('/', require('./routes/routes'));

// In case of unknown route
app.use((req, res) => {
  res.status(404);
  res.render("404");  
});

// Start server
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}...`);
});