const express          = require('express');
const app              = express();
const passport         = require('passport');
const postsController  = require('../controllers/posts-controller');
const usersController  = require('../controllers/users-controller');


// Login
app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/blog',
    failureRedirect: '/login',
    passReqToCallback: true,
    failureFlash: true
  }));
  
//Register user
app.post('/register', passport.authenticate('local-register', {
    successRedirect: '/blog',
    failureRedirect: '/register',
    passReqToCallback: true,
    failureFlash: true
}));
  
// Log Out
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/blog');
});
  
// Go to de login page
app.get('/login', (req, res) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');  
  if (req.user) {
      res.redirect('/blog');
    } else {  
      res.render('login');
    }
});
  
// Go to the register page
app.get('/register', (req, res) => {
    if (req.user) {
      res.redirect('/blog');
    } else {
      res.render('register');
    }
});
  
// Go to the blog page
app.get('/blog', async (req, res) => {  
  res.render('blog', {req: req});
});

// Handle posts
app.post('/post', (req, res) => {
  postsController.addPost(req);
  res.redirect('/blog');
});

// Load more posts
app.get('/load-posts', async (req, res) => {
  let currentLength = 0;
  postsList = await postsController.getPosts(parseInt(req.query.postCount), parseInt(req.query.skipCount));
  currentLength += postsList.length
  res.send({postsList: postsList, currentLength: currentLength});
})

// Delete post
app.post('/delete-post', (req, res) => { 
  postsController.deletePost(req);
  res.redirect('/blog')
});

// Get user for profile
app.post('/user-profile', (req, res) => {
  res.redirect(`/profile?user=${req.body.user}`);
});

// Proccess user search request
app.get('/profile', async (req, res) => {
  let user = await usersController.getUserById(req.query.user);
  if (user){
    res.render('profile', {user: user, req: req});
  } else {
    res.redirect('/blog?user=notfound');
  }
});

module.exports = app;