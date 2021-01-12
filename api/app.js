const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send('ok')
})

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`)
})