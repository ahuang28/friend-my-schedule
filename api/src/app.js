const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
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

    // app.use(function (req, _res, next) {
    //     console.log(req.method, req.url);
    //     next();
    // })

    app.post('/login', async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email: email, password: password })
            if (!user) {
                res.status(401).json({ error: "User not found" })
            }
            res.status(200).json(user)
        } catch (err) {
            res.status(400).json({ error: err })
        }
    })

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
    app.patch('/users/:id/match', async (req, res) => {
        try { 
            const userId = req.params.id;

            const user = await User.findById(req.params.id);
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }

            let users = await User.find({});

            users = JSON.stringify(users);

            const script = path.join(path.dirname(path.dirname(__dirname)),'/','python','scripts','match.py')
            const ls = spawn('python', [script, userId, users]);
            

            // Handle stdout
            ls.stdout.on('data', (data) => {
                const newmatches = JSON.parse(data);
                res.json(newmatches);


            // Update a specific field for the user
            User.findByIdAndUpdate(userId, { $set: { matches: newmatches } }, { new: true })
                .then(user => {
                console.log('User updated successfully:', user);
              })
              .catch(err => {
                console.error(err);
              });

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

    //fetch matching users and populate matches field

    app.patch('/users/:id/match/fetch', async (req, res) => {

        const userId = req.params.id;

        User.findById(userId)
        .populate('matches.user')  // Populate the 'user' field in the 'matches' array
        .exec()
        .then(user => {
            if (!user) {
            console.log('User not found');
            return;
            }

            console.log('User:', user);
            console.log('Matches:', user.matches);
            res.json(user.matches)
        })
        .catch(err => {
            console.error(err);
        });

        
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