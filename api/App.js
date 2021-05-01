const express = require('express');
const exp = express();
const port = process.env.PORT || 8000;


exp.get('/', (req, res) => {
    res.send('Hello from Express!');
});

exp.get('/api', (req, res) => {
    
res.send('Express App sending a res from the Express get OH');
});

exp.listen();




