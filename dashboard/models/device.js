const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deviceSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100},
    powerUsage: {type: Number}
  }
);


//Export model
module.exports = mongoose.model('Device', deviceSchema);
