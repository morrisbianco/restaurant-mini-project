const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const tables = [
    {
        routeName: 'exampleTable',
        name: 'John Test',
        phone: 1236547890,
        email: 'jtest@example.com',
        tableId: 2,
    },
];

const waitlist = [
    {
        routeName: 'exampleWaitList',
        name: 'John Test',
        phone: 1236547890,
        email: 'jtest@example.com',
        tableId: 3,
    },
];

// Routes

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

// Displays all Tables and Waitlist
app.get('/api/tables', (req, res) => res.json(tables));

app.get('/api/waitlist', (req, res) => res.json(waitlist));

app.post('/api/resere', (req, res) => {
    const newReservation = req.body;
    
    newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
    console.log(newReservation);
    
    tables.push(newReservation);
    res.json(newReservation);
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});