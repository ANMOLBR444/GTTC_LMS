const mongoose = require('mongoose');
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
  }
});

UserSchema.plugin(passportlocalmongoose);
module.exports = mongoose.model('User', UserSchema);