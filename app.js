const express = require('express');

// Express app
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    // .sendFile() expects an absolute path by default, so set the root filepath
    // to __dirname (i.e. the current directory)
    res.sendFile('./views/index.html', { root: __dirname });
    // .sendFile() sends response to browser such that the app will 
    // not match to any other routes if it is invoked
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirect
app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

// 404 Page
app.use((req, res) => {
    // If nothing above has matched, will match to this .use() method
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
