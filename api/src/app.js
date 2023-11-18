const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');

require('dotenv').config();
const app = express();
mongoose.connect(process.env.MONGO, { retryWrites: true, w: 'majority'}).then(() => {
    console.log('Connected to MongoDB');
    server();
});

const server = () => {

    app.use(cors());
    app.use(express.json());

    app.use(function (req, res, next) {
        console.log('Time:', Date.now(), req.method, req.url);
        next();
    })

    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.post('/users', async (req, res) => {

        try {
            const user = new User(req.body);
            await user.save(user);
            res.status(201).json(user);
        } catch {
            res.status(400).json({ error: 'Invalid request' });
        }
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

}