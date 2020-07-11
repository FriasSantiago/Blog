const mongoose = require('mongoose');
const Post     = require('./Post');

const userSchema = new mongoose.Schema({
    key: {type: String, default:'', trim: true},
    email: {type: String, default:'', trim: true},
    uid: {type: String, default:'', trim: true},
    pwd: {type: String, default:'', trim: true}
});

module.exports = mongoose.model('User', userSchema);