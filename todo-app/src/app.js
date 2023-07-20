const app = require('express')();


app.get('/', (req, res) => {
    res.send('Hello World!');
});


exports = module.exports = app;