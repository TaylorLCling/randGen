const express = require('express', '4.18.2');
// Create a variable for the express module, requireing it like importing it to the page
const app = express();
//create a app instance using the express app
const port = 8000;
//Define the port being used 


//Define the GET response and import its request and response variables.
app.get('/', (req, res) => {
    //In response to the request send the Hello World String to be presented to the browser
    res.send('Hello World! This is Taylor on Express');
})

//Notify admin of successful deployment by listening to the port and printing to the command line when 
app.listen(port, () => {
    //once listen activates, print string to the command line
    console.log(`Example app listening on port ${port}`);
})