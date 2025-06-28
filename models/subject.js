const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  credits: { type: Number, required: true },
});

module.exports = mongoose.model('Subject', subjectSchema);