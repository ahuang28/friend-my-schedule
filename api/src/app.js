const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
// const { PythonShell } = require("python-shell")
const { spawn } = require("child_process");
const path = require('path');

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
        
        const script = path.join(path.dirname(path.dirname(__dirname)),'/','python','test.py')

        const pythonProcess = spawn('python3', [script]);

        pythonProcess.stdout.on('data', (data) => {
            res.write(data)
        })

        pythonProcess.on("close", (code) => {
            console.log(`${code}`)
            res.end()
        })
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
            const id = req.params.id;

            let users = await User.find({});

            // for (let i = 0; i < users.length; i++) {
            //     users[i]._id = users[i]._id.toString();
            //     console.log(users[i]._id.toString());
            // }
            users = JSON.stringify(users);

            const script = path.join(path.dirname(path.dirname(__dirname)),'/','python','scripts','match.py')
            const ls = spawn('python', [script, id, users]);
            

            // Handle stdout
            ls.stdout.on('data', (data) => {
                console.log(data.toString());
                res.json(JSON.parse(data));
            });

            // Handle stderr
            ls.stderr.on('data', (data) => {
                console.log(`stderr: ${data}`);
              });

            // Handle close
            ls.on("close", (code) => {
                console.log(`${code}`)
            })
                   

        } catch (err) {
            res.status(400).json({ error: err });
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