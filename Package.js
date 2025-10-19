const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  priceCents: { type: Number, required: true },
  recurrence: { type: String, enum: ['one-time','weekly','monthly','yearly'], default: 'one-time' },
  subjects: [String],
  createdAt: { type: Date, default: Date.now },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Package', PackageSchema);
