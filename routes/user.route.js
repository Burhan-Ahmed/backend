const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getProfile } = require('../controller/user.controller');
const { authenticateToken } = require('../Middleware/auth.middleware');

// User Registration
router.post('/register', registerUser);

// User/Admin Login (using isAdmin flag to differentiate)
router.post('/login', loginUser);

router.get('/profile/:id', authenticateToken, getProfile);
module.exports = router;
