const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(bodyParser.json());

app.get('/*', (req, res) => {
    res.json({});
});
app.post('/*', (req, res) => {
    console.log(`${req.url} : ${req.body.message}`);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});