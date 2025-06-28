const mongoose = require('mongoose');
const Subject = require('./subject');
const User = require('./user');
const Schema = mongoose.Schema;
const classSchema = new Schema({
  name: { type: String, required: true },
  subjectFacultyMap: [
    {
      subject: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
      faculties: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }] 
    }
  ],
  students: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Class', classSchema);
