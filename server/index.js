'use strict';

const express = require('express');
const seed = require('random-seed');
const path = require('path');
const appRand = express();
const port = 7263; //RAND

// Have Node serve the files for our built React app
// reactAPI.use(express.static(path.resolve(__dirname, '../client/build')));

// appRand.use('/api', reactAPI);

// // Have Node serve the files for our built React app
// appRand.use(express.static(path.resolve(__dirname, '../client/build')));

appRand.get('/', (request, respond) => {
    // respond.statusCode = 200;
    // respond.json('Hello! This is the front page');
    // respond.json('Hello! This is the front page please enter a number');
    respond.sendFile(path.resolve(__dirname, '../views', 'index.html'));

    console.log(`When exactly does this run and how many times?`);

})

appRand.post('/', (request, respond) => {
  console.log('There has been a POST request has been made:')
  console.log(request.query.min);
  console.log(request.query.max);
})




// Handle GET requests to /api route
appRand.get("/api", (request, respond) => {
  respond.json({ message: "API location this is a test message what is happening." });
});

// Handle GET requests to /classic route
// appRand.get("/classic", (request, respond) => {
//     respond.sendFile(__dirname + '/index.html');
//   });

appRand.get('/stuff', (request, respond) => {
    respond.statusCode = 404;
    respond.json('Taylor Stop');
})

appRand.listen(port, () => {
    console.log(`Success, If you're looking for the app it's on http://localhost:${port}`);
})

// appRand.get('*', (request, respond) => {
//   respond.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });
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


function checkInput(input) {
    var message = "";
    if(input.min < 0 | input.max < 0){
      message = "No negative numbers";
    }
    else if(input.min == input.max){
      message = "Minimum can not be equal to Maximum";
    }
    else if(input.min > input.max){
      message = "Minimum can't be larger than Maximum";
    }
    else {
      message = `Generating random number for:  [${input.min} : ${input.max}]`;
    }
    return message;
  }

function getRandomInt(min, max) {
  return rand.inBetween(min, max);
};