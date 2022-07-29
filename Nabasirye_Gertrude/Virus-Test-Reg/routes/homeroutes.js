const express = require('express');

const Registration = require('./../models/Registration')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Virus-Test Registration'
    })
});

router.post('/', async (req, res) => {
    try {
        const reg = await Registration.create(req.body)

        console.log(req.body)

        res.status(201).render('index', {
            title: 'Virus-Test Registration',
            message: 'Registration was successful!'
        })
    } catch (err) {
        res.status(400).render('index', {
            title: 'Virus-Test Registration',
            error: 'Registration failed!'
        })
    }
})

module.exports = router