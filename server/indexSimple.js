//Create a veriable to access the express module from, using the require method does this also as it imports it
const express = require('express');
//Create an instance of an express app too work on for the rest of the file. express() creates this app in default settings
const appRand = express();
//Initiate the variable that holds the port that will be used on the local HOST
const port = 7263; //RAND

//appRand is the app created, This defines the request response behavior of the app, immedietly passing it to the function below
//in this case the '/' Is references the place in the URL where this will be run. '/' meaning the home page localhost:7263/ <=
appRand.get('/', (request, response) =>{
    //from the response variable add to the send variable the string to be presented to the user
    //the send method is meant to do a couple things but sending in a string like this makes it simply treat it like HTML and build the screen accordingly
    response.send("Hello Welcome to an Express Random Number Generator");
})


//Now we notify the admin when the server is active and usable. We do this by accessing the apps, port and listening for activity 
// When activity is found, a string is presented to the console notifing of success and presenting the localhost url to the admin.
appRand.listen(port, () => {
    console.log(`Success, If you're looking for the app it's on localhost:${port}`);
})

//=> This is a way to push the result to a function called an anonomous function. 