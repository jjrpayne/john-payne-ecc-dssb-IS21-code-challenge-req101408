const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/:
 *   get:
 *     summary: Returns a hello world message
 *     tags: [General]
 *     responses:
 *       200:
 *         description: A hello world message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Hello World!"
 */

router.get('/api/', (req, res) => {
    res.send('Hello World!');
})

/**
 * @swagger
 * /api/health/:
 *   get:
 *     summary: Checks Server health
 *     tags: [General]
 *     responses:
 *       200:
 *         description: Message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Server is healthy."
 */

// health check
router.get('/api/health/', (req, res) => {
    res.status(200).send("Server is healthy.");
})

module.exports = router;