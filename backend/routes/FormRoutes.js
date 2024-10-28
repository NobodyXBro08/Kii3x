const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

router.post('/form', async (req, res) => {
    try {
        const newForm = new Form(req.body);
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
