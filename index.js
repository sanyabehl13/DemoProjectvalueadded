const express = require('express');
const path = require('path');


const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render EJS template
app.get('/', (req, res) => {
    res.render('index', {title:'Ejs App', message: 'Hello from EJS!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});