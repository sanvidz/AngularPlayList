// include the required packages
//By using "require" we tell node.js that it has to be pulled into our code because we need it.
const express = require('express');
const bodyParser = require('body-parser');

// include built in path module
const path = require('path');

// declare the routes for application
const api = require('./server/routes/api');

// specify the port
const port = 3000;

// create an intance of express
const app = new express();

// specify the folder where all the  angular code is placed
// and give access to distributable folder
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: true }));

// parses the text as json
app.use(bodyParser.json());

// use the api route
app.use('/api', api);

// for rendering the index file in dist & for matching any path
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/List/index.html'));
});

// listen to request on given port no
app.listen(port, function () {
    console.log("Server Running on localhost:" + port);
})
