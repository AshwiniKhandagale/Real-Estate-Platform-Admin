const express = require('express');
const router = express.Router();
const { getAllProperties, getPropertyById } = require('../controllers/propertyController');
const verifyToken = require('../middlewares/authMiddleware');

router.get('/properties', verifyToken, getAllProperties);
router.get('/properties/:id', verifyToken, getPropertyById);

module.exports = router;
