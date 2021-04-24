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
    },
    device0: {type: number, max: 100, min:0},
    device1: {type: number, max: 100, min:0},
    device2: {type: number, max: 100, min:0},
    device3: {type: number, max: 100, min:0},
    device4: {type: number, max: 100, min:0},
    device5: {type: number, max: 100, min:0},
    device6: {type: number, max: 100, min:0},
    device7: {type: number, max: 100, min:0}
  }
);


//Export model
module.exports = mongoose.model('user', userSchema);
