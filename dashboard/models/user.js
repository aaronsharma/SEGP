var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    user_name: {type: String, required: true, maxLength: 100},
    password: {type: String, required: true, maxLength: 100},
    device0: {type: Number, max: 100, min:0},
    device1: {type: Number, max: 100, min:0},
    device2: {type: Number, max: 100, min:0},
    device3: {type: Number, max: 100, min:0},
    device4: {type: Number, max: 100, min:0},
    device5: {type: Number, max: 100, min:0},
    device6: {type: Number, max: 100, min:0},
    device7: {type: Number, max: 100, min:0},
    powerUsage: { type: Number,
      min: [0, 'Too little power usage'],
      max: [10000, 'Too much power usage']
    }
  }
);


//Export model
module.exports = mongoose.model('User', userSchema);
