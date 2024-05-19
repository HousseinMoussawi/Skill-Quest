const express = require("express");

const {generateText} = require('../controllers/AI.controller')

const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post('/',authMiddleware,generateText)

module.exports = router