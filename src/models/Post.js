const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId},
    uid: {type: String, default:'', trim: true},
    date: {type: String},
    data: {type: String}
});

module.exports = postSchema;