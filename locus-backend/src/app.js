const express = require('express');
const cors = require('cors');

const app = express ();

app.use(cors());
app.use(express.json());

const users = []; 

app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;

    console.log('Received registration data:', { username, email, password });

    if(!username || !email || !password) {
        return res.status(400).json({ message: 'Please fill in all fields.' });
    }

    const userExists = users.find(u=> u.email === email);
    if(userExists) {
        return res.status(400).json({ message: 'User already exists.' });
    }

    const newUser = { id: users.length + 1, username, email, password };
    users.push(newUser);

    console.log(newUser);
    
    return res.status(200).json({ message: 'Registration successful' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});