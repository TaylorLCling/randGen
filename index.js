const express = require('express');
const appRand = express;
const port = 7263; //RAND

app.get('/', (request, response) =>{
    response.send("Hello Welcome to an Express Random Number Generator");
})



app.listen(port, () => {
    console.log(`Success, If you're looking for the app it's on localhost:${port}`);
})

