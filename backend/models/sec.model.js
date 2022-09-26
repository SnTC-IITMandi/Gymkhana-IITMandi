const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const secSchema = new Schema({
  name: { type: String, required: true },
  post: { type: String, required: true },
  facebook: { type: String, required: false },
  email: { type: String, required: true },
  img: { type: img, required: true },
  year: {type:number,required:true},
});

const Secretary = mongoose.model('Secretary', secSchema);

module.exports = Secretary;