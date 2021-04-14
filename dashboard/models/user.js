var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    user_name: {type: String, required: true, maxLength: 100},
    password: {type: String, required: true, maxLength: 100},
    powerUsage: {type: Float}
  }
);


//Export model
module.exports = mongoose.model('user', userSchema);
