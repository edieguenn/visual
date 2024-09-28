const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.post('/add-rabbit', (req, res) => {
    const newRabbit = req.body;
    // Here you would typically save the newRabbit data to a database

    console.log('New Rabbit Added:', newRabbit);
    res.json({ status: 'success' });
});
