const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Data storage (in-memory)
let rabbits = [];
let cages = [];

// Home Route
app.get('/', (req, res) => {
    res.render('index', { cages });
});

// Route to display rabbits in a cage
app.get('/cage/:cageId', (req, res) => {
    const cageId = req.params.cageId;
    const cageRabbits = rabbits.filter(rabbit => rabbit.cageNumber === cageId);
    res.render('cage', { cageId, cageRabbits });
});

// Add a new rabbit
app.post('/add-rabbit', (req, res) => {
    const rabbit = {
        serialNumber: req.body.serialNumber,
        cageNumber: req.body.cageNumber,
        breed: req.body.breed,
        age: req.body.age,
        weight: req.body.weight,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        rabbitFamily: req.body.rabbitFamily,
        foodIntake: req.body.foodIntake,
        pregnancyStart: req.body.pregnancyStart,
        pregnancyDue: req.body.pregnancyDue,
        eligibleForMating: req.body.eligibleForMating === 'on'
    };
    rabbits.push(rabbit);
    res.redirect('/');
});

// Delete a rabbit
app.post('/delete-rabbit', (req, res) => {
    const serialNumber = req.body.serialNumber;
    rabbits = rabbits.filter(rabbit => rabbit.serialNumber !== serialNumber);
    res.redirect('/');
});

// Add a new cage
app.post('/add-cage', (req, res) => {
    const cageNumber = req.body.cageNumber;
    cages.push(cageNumber);
    res.redirect('/');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
