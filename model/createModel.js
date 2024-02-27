const mongoose = require('mongoose');
const { Schema } = mongoose;

const createModel = new Schema({
  task: String ,
  done: {
    type: Boolean,
    default: false
  }
 
});

module.exports = mongoose.model("Abc",createModel)