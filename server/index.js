'use strict';

const express = require('express');
const seed = require('random-seed');
const path = require('path');
const appRand = express();
const port = 7263; //RAND


// Have Node serve the files for our built React app
appRand.use(express.static(path.resolve(__dirname, '../client/build')));


appRand.get('/', (request, respond) => {
    respond.statusCode = 200;
    respond.json('Hello! This is the front page');
})

// Handle GET requests to /api route
appRand.get("/api", (request, respond) => {
  respond.json({ message: "Taylor this is a test message what is happening." });
});

// Handle GET requests to /classic route
appRand.get("/classic", (request, respond) => {
    respond.sendFile(__dirname + '/index.html');
  });

// appRand.get('/api', (request, respond) => {
//     respond.statusCode = 200;
//     respond.json('Hello from server this is the API page!');
// })

appRand.get('/stuff', (request, respond) => {
    respond.statusCode = 404;
    respond.json('Taylor Stop');
})

appRand.listen(port, () => {
    console.log(`Success, If you're looking for the app it's on http://localhost:${port}`);
})


/*

I dont want this because I was a website with a react side and just an express side, because this is for learning. 
'/' will be the front page and handled by express at line 9
'/api' will be React and done by the react app on line 16
'/stuff' will be express and is just for me messing around.


// All other GET requests not handled before will return our React app
app.get('*', (request, respond) => {
  respond.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
*/ 

appRand.get('*', (request, respond) => {
    respond.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });




  function checkInput(input) {
    var message = "";
    if(input < 0){
      message = "No negatives...  User Error! Please Try Again!";
    }
    else {
      message = "Hi i would love to give you a random number.  " + input;
    }
    return message;
  }

  function getRandomInt(max) {
    return rand(max+1);
  };