const express = require('express');
const router = express.Router();
const { getAllAgents, getAgentById } = require('../controllers/agentController');
const verifyToken = require('../middlewares/authMiddleware');

router.get('/agents', verifyToken, getAllAgents);
router.get('/agents/:id', verifyToken, getAgentById);

module.exports = router;
