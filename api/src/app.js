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
        // PythonShell.run("/../python/test.py", null, (err, result) => {
        //     if (err) console.log(err)
        //     else console.log(result)
        // })
        const script = path.join(path.dirname(path.dirname(__dirname)),'/','python','test.py')

        const pythonProcess = spawn('python3', [script]);

        pythonProcess.stdout.on('data', (data) => {
            res.write(data)
        })

        // pythonProcess.stderr.on("data", (data) => {
        //     console.log(`${data}`)
        // })

        pythonProcess.on("close", (code) => {
            console.log(`${code}`)
            res.end()
        })
        // const pid = pythonProcess.pid;
        // pythonProcess.kill(pid)
        // try {
        // } catch {
        //     console.log("LMAO")
        // }

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

            const pythonProcess = spawn('python', ['../../python/scripts/match.py', user, users]);
            
            let pythonOutput = ''; // To store the output from Python

            // Handle stdout
            pythonProcess.stdout.on('data', (data) => {
            pythonOutput += data.toString(); // Convert Buffer to string and append to the output
            });

            // Handle stderr
            pythonProcess.stderr.on('data', (data) => {
            console.error(`Python stderr: ${data}`);
            });

            // Handle process exit
            pythonProcess.on('close', (code) => {
            console.log(`Python script exited with code ${code}`);
            });
                
            const jsonData = JSON.parse(pythonOutput);
            res.json(jsonData); // Send the JSON response


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