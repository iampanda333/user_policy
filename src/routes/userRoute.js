const express = require('express');
const router = new express.Router();

router.post('/users/upload', async (req, res) => {
    res.send({ success: true });
}, (error, req, res, next) => {
    res.status(400).send({ error: "Error!"});
})

module.exports = router;
