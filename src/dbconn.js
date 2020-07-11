const mongoose     = require('mongoose');
const { mongourl } = require('./keys');

// Connect to MongoDB
mongoose.connect(mongourl.URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('Connected!')).catch(err => console.log(err));