// API router
const express = require('express');

// Get routes
const trashcanType = require('./trashcanType/trashcanType.route');
const county = require('./county/county.route');
const city = require('./city/city.route');
const trashcan = require('./trashcan/trashcan.route');

// Invoke API router
const router = express.Router();

// Mount the routes
router.use('/trashcanType', trashcanType);
router.use('/county', county);
router.use('/city', city);
router.use('/trashcan', trashcan);

// Generic response for /api
router.get('/', (req, res) => {
  res.json({
    message: 'API'
  });
});

// export the  router so it can be mounted in index.js
module.exports = router;
