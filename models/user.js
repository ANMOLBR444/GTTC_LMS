const mongoose = require('mongoose');
const Class = require('./class');
const passportlocalmongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
    type: String,
    enum: ['admin', 'faculty', 'student'],
    required: true
  },
  classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }]
});

UserSchema.plugin(passportlocalmongoose);
module.exports = mongoose.model('User', UserSchema);