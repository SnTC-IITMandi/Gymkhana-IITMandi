const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const secSchema = new Schema({
  name: { type: String, required: true },
  post: { type: String, required: true },
  facebook: { type: string, required: false },
  email: { type: string, required: true },
  img: { type: img, required: true },
  year: {type:number,required:true},
});

const Secretary = mongoose.model('Secretary', secSchema);

module.exports = Secretary;