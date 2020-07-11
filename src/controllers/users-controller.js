const User = require('../models/User');

module.exports.getUserById = uid => {
    return User.findOne({uid: uid});
};