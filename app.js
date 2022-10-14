const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.use('/add-numbers',(req, res) => {

    const { firstParam, secondParam } = req.query;
    const sum = Number(firstParam) + Number(secondParam);

    res.json({ firstParam, secondParam, sum })
});

app.use('/', (req,res) => {
    res.status(404).json({ message: 'Not Found'})
})

app.listen(8081)