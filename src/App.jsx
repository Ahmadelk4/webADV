import React from "react";
import "./CSS/Banner.css";
import Banner from "./components/Banner";
import "./Css/navBar.css";
import Nav from "./components/nav";
import "./CSS/PremiumShades.css";
import PremiumShades from "./components/PremiumShades";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <br />
      <br />
      <br />

      <PremiumShades />
    </div>
  );
}

export default App;
