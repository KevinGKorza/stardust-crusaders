//Exporting the mongoose connection
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost:27017/gamestartdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;