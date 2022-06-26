const express = require('express');

// Express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Configure port to listen to
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

// 404 Page
app.use((req, res) => {
    res.status(404).render('404');
});
