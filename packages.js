const express = require('express');
const router = express.Router();
const Package = require('../models/Package');
const auth = require('../middleware/auth');

// Public: list packages
router.get('/', async (req, res) => {
  try {
    const pkgs = await Package.find({ active: true });
    res.json(pkgs);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Admin: create package
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Forbidden' });
    const pkg = new Package(req.body);
    await pkg.save();
    res.json(pkg);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
