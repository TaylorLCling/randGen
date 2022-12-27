var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, '../views', 'generator'));
    res.render('generator');
});

router.post('/', (request, respond) => {
    console.log('A POST request has been made:')
    console.log(request.query.min);
    console.log(request.query.max);
  })

module.exports = router;
