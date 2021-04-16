var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema(
  {
    device_name: {type: String, required: true, maxLength: 100},
    powerUsage: {type: Number}
  }
);


//Export model
module.exports = mongoose.model('device', userSchema);
