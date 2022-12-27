const express = require('express');
var layouts = require('express-ejs-layouts');

const appRand = express();
const port = 7263; //RAND
appRand.set('view engine', 'ejs');
appRand.use(layouts);

appRand.get('/', (req, res) =>{
    
    var locals = {
        title: 'Random Number Generator',
        description: 'This is a UI for a Random Number generator use the buttom to generate random numbers.',
        header: 'Number Generation'
      };
      res.render('the-view', locals);
})

appRand.listen(port, () => {
    console.log(`Success, If you're looking for the app it's on localhost:${port}`);
})

