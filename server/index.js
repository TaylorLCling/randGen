const express = require('express');
const appRand = express();
const port = 7263; //RAND

appRand.get('/', (request, respond) => {
    respond.statusCode = 200;
 //   respond.status(200).json('Hello! This is the front page');
    respond.json('Hello! This is the front page');
})

appRand.get('/api', (request, respond) => {
    respond.statusCode = 200;
    respond.json('Hello from server this is the API page!');
})

appRand.get('/stuff', (request, respond) => {
    respond.statusCode = 404;
    respond.json('Taylor Stop');
})

appRand.listen(port, () => {
    console.log(`Success, If you're looking for the app it's on http://localhost:${port}`);
})

