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

    //update user given id and new data 
    app.patch('/users/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const updatedUser = req.body;

            const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });

            res.json(user);
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: err });
        }
    })

    //generate match using python script in python/script folder

    app.get('/users/:id/match', async (req, res) => {
        try { 
             const user = await User.findById(req.params.id);
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }

            const users = await User.find({});
            
            const { spawn } = require('child_process');

            const pythonProcess = spawn('python', ['../../python/scripts/match.py', arg1, arg2]);



        } catch {
            res.status(400).json({ error: 'Invalid request' });
        }
    });

    //get user by id 
    app.get('/users/:id', async (req, res) => {
        try { 
             const user = await User.findById(req.params.id);
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                res.json(user);
        } catch {
            res.status(400).json({ error: 'Invalid request' });
        }
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

}