var express = require('express');
var seed = require('random-seed');
var router = express.Router();

var generatedNum = {num:null, minUsed:null, maxUsed:null};
var generatedList = [];
var currMin = 0;
var currMax = 3;
var listString = '';
var resultMessage = '';
var rand = seed.create();

/* GET home page. */
router.get('/', (request, respond) => {
    respond.render('generator', {
        min: currMin,
        max: currMax,
        message: resultMessage,
        result: listString
        
    });
});

router.post('/', (request, respond) => {
    var success = checkInput(request.body);

    if(success) {
        setCurrMin(request.body.min);
        setCurrMax(request.body.max);
        generateNumber(request.body);
        setListString(getGeneratedList(generatedList));
    }

    console.log('A POST request has been made:');
    if(success) {
        console.log('status: true')
    }
    else{
        console.log('status: false')
    }
    console.log(`currMin: ${currMin}`);
    console.log(`currMax: ${currMax}`);    
    console.log(listString);
    console.log(resultMessage);
    console.log(generatedList);

    respond.render('generator', {
        min: currMin, 
        max: currMax, 
        message: resultMessage,
        result: listString
    });
})


function checkInput(input) {
    var message = "";
    var success = false;
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
      success = true;
    }
    setResultMessage(message);

    return success;
  }

function setCurrMin(num) {
    currMin = num;
};

function setCurrMax(num) {
    currMax = num;
};

function setListString(string) {
    listString = string;
}

function setResultMessage(string) {
    resultMessage = string;
}

function generateNumber(input){
    var generatedNum = {
        num:rand.intBetween(input.min, input.max),
        minUsed:input.min,
        maxUsed:input.max
    }; 

    generatedList.unshift(generatedNum);
};

function getGeneratedList(generatedList){
    var string = '';
    if (generatedList != []) {
        string = `Number Generator for [${generatedList[0].minUsed}:${generatedList[0].maxUsed}] = ${generatedList[0].num}`
    };
    return string;
};

module.exports = router;
