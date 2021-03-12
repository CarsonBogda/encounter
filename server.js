// the absolute most simple express server to load static files
const express = require('express');

// create new 'server' app
const server = express();

// allow the public to access your static files (UI/front end)
server.use('/', express.static('front-end'));

// do we have a port we want to use?

const port = process.env.PORT || 3100; // 3100 by default

server.listen(port, function(err) {
    if(err)
    {
        console.log('Error starting server: ', err);
    }

    console.log(`Server listening on http://localhost:${port}...`);
})

