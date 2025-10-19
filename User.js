const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student','admin','tutor'], default: 'student' },
  createdAt: { type: Date, default: Date.now },
  meta: {
    grade: String,
    interests: [String]
  }
});

module.exports = mongoose.model('User', UserSchema);
