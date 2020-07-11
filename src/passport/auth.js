const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcryptjs');
const User          = require('../models/User');
const emails        = require('../controllers/email-controller');


passport.use('local-register', new LocalStrategy({
    usernameField: 'uid',
    passwordField: 'pwd',
    passReqToCallback: true
}, async(req, uid, pwd, done) => {
    
    let userEmail = await User.findOne({uid: uid, email: req.body.email});
    
    if (userEmail != null) {
        return done(null, false, {message: `The email ${req.body.email} is already in use`});
    } else {
        let userUid = await User.findOne({uid: uid});
        if (userUid != null) {
            return done(null, false, {message: `The username ${uid} is already in use`});
        }
    }

    try {
        
        let hashPwd = await bcrypt.hash(pwd, 10);

        user = new User();
        user.key = Date.now().toString();
        user.email = req.body.email;
        user.uid = uid;
        user.pwd = hashPwd;

        await user.save();
        emails.sendWelcomeEmail(user);
        return done(null, user);

    } catch (error) {
        return done(error);
    }
}));

passport.use('local-login', new LocalStrategy({
    usernameField: 'uid',
    passwordField: 'pwd',
    passReqToCallback: true
}, async(req, uid, pwd, done) => {
    
    let user = await User.findOne({uid: uid});

    if(user == null) {
        return done(null, false, {message: "Incorrect username"});
    }

    try {
        if (await bcrypt.compare(pwd, user.pwd)) {
            return done(null, user);
        } else {
            return done(null, false, {message: "Incorrect password"});
        }
    } catch (error) {
        return done(error);
    }
}));


passport.serializeUser((user, done) => {
    done(null, user.uid);
});

passport.deserializeUser(async (uid, done) => {
    user = await User.findOne({uid: uid});
    done(null, user);
});

