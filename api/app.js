require('dotenv').config()
const { query } = require('express');
const express = require('express');
const Twitter = require('./helpers/twitter');

const twitter = new Twitter()

const app = express();
const PORT = 3000;

app.get('/tweets', (req, res) => {
    const searchParam = req.query.search
    const count = req.query.count | 10;
    
    twitter.get(searchParam, count)
        .then(response => {
        res.status(200).send(response.data)
    })
    .catch(err => {
        res.status(400).send(err.message)
    })
})

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`)
})