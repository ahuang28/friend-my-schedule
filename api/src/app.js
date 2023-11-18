const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(function (req, res, next) {
    console.log('Time:', Date.now(), req.method, req.url);
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});