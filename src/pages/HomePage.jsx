import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import PremiumShades from "../components/PremiumShades";
import "../CSS/App.css";

export default function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <br />
      <br />
      <br />

      <PremiumShades />
    </div>
  );
}
