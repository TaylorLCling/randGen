/*
This seems like a very simple App front page, getting the items togeather too present the front page too the user, creating a function
and embedding hard-coded Html to display when the function is called.


1) Sent here to fetch data from the url /api. 



*/

//import react and logo and css for help displaying the front end
import React from "react";
import logo from "./logo.svg";
import "./App.css";

//The app function is what will be run
function App() {
  //The react state is what will hold the data retrieved from the user and html at /api, so pull it from that
  const [data, setData] = React.useState(null);


  //useEffect here is creating an HTTP request, specifically a simple GET request using FETCH
  React.useEffect(() => {
    //Fetch is a simple method to manipulating parts of a protocol and as a method easily and async* retrieves resources
    fetch("/api")
      //Turn the respond variable into returning the response as a json
      .then((respond) => respond.json())
      //take in the data received and specifially save the message return specifically the data given to us and add it to the message data
      .then((data) => setData(data.message));
  }, []);

  //now return the html, with the app logo and the loading sign.
  // Here in the paragraph <p> section, if the site has data it will present the data from previous data.message, otherwise itll show loading.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;











/*
//ORIGINAL FILE CONTENTS SAVED FOR MY REFERENCE


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/