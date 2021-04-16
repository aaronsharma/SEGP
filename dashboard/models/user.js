var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    user_name: {type: String, required: true, maxLength: 100},
    password: {type: String, required: true, maxLength: 100},
    powerUsage: {
      type: Number,
      min: [0, 'Too little power usage'],
      max: [10000, 'Too much power usage']
    }
  }
);


//Export model
module.exports = mongoose.model('user', userSchema);
