const postSchema = require('../models/Post');
const mongoose = require('mongoose');

// Create Post model
let Post = mongoose.model('Post', postSchema);

// Get current formatted date

const getCurrentDate = () => {
    let currDate = new Date(); 
    let dd = currDate.getDate(); 
    let mm = currDate.getMonth() + 1; 

    let yyyy = currDate.getFullYear(); 
    if (dd < 10) { 
        dd = '0' + dd; 
    } 
    if (mm < 10) { 
        mm = '0' + mm; 
    } 
    currDate = dd + '/' + mm + '/' + yyyy;
 
    return currDate; 
}


module.exports.addPost = async (req) => {
    let post  = new Post();
    post.userID  = req.user._id;
    post.uid  = req.user.uid;
    post.date = getCurrentDate(); 
    post.data = req.body.postData;

    post.save();
}

module.exports.deletePost = async (req) => {
    await Post.findOneAndDelete({_id: req.body.postId});
}

module.exports.getPosts = async (postCount, skipCount) => {
    let posts = await Post.find().sort("-_id").skip(skipCount).limit(postCount);
    return posts;
}