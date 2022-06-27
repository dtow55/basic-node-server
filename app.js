const express = require('express');

// Express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Configure port to listen to
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'This is a snippet'},
        {title: 'Mario finds stars', snippet: 'This is a snippet'},
        {title: 'How to defeat bowser', snippet: 'This is a snippet'},
    ];

    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

// 404 Page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
