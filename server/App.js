// Jasmine's version:
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/:name', (req, res) => {
    res.send(`Sorry, no websites are currently registered in the database.`);
 });
app.listen();