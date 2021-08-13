const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
}).then (() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message))

module.exports = mongoose.connection;
