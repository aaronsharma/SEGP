
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var glacierSchema = new Schema({
   name: {
      type: String,
      required: [true, 'GlacierName is required']
   },
   startingSize: Number,
   user:{
      type: Schema.ObjectId,
      ref:'User'
   },
   device0:{
      type: Schema.ObjectId,
      ref:'device0'
   }
   // device1:{
   //    type: Schema.ObjectId,
   //    ref:'device1'
   // },
   // device2:{
   //    type: Schema.ObjectId,
   //    ref:'device2'
   // },
   // device3:{
   //    type: Schema.ObjectId,
   //    ref:'device3'
   // },
   // device4:{
   //    type: Schema.ObjectId,
   //    ref:'device4'
   // },
   // device5:{
   //    type: Schema.ObjectId,
   //    ref:'device5'
   // }
})

const glacier = mongoose.model('glacier', glacierSchema);

module.exports = glacier;
