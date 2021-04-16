
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var glacierSchema = new Schema({
   name: {
      type: String,
      required: [true, 'GlacierName is required']
   },
   startingSize: {Number,
      required: [true, 'Starting size is required'],
      min: [0], 
      max: [100]
   },
   user:{
      type: Schema.ObjectId,
      ref:'User'
   },
   device:{
      type: Schema.ObjectId,
      ref:'device'
   }
})

const glacier = mongoose.model('glacier', glacierSchema);

module.exports = glacier;
