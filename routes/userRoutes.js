const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById } = require('../controllers/userController');
const verifyToken = require('../middlewares/authMiddleware');

router.get('/users', verifyToken, getAllUsers);
router.get('/users/:id', verifyToken, getUserById);

module.exports = router;
