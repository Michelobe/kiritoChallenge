import React from 'react';
import Header from "./components/Header.js";
import ChallengeSect from "./components/ChallengeSect.js";
import Footer from "./components/Footer.js";
import "./css/App.css"

function App() {
  return (
    <div className="App">
        <Header />
        <ChallengeSect />
        <Footer />
    </div>
  );
}

export default App;
