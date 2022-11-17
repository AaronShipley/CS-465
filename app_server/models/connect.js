const mongoose = require('mongoose');
const { dbURI } = require("./db");

function connect() {
  setInterval(() => mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true
  }), 1000);

}
