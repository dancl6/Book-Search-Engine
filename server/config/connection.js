const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.REACT_APP_MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose.connection;
