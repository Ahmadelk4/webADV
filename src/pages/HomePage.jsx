import model from "../assets/model3.png";
import Navbar from "../components/Navbar";
import "../CSS/Banner.css";
import "../CSS/PremiumShades.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  const shades = [
    { id: 0, age_gender: "Men", link: "#", image: model },
    { id: 1, age_gender: "Women", link: "#", image: model },
    { id: 2, age_gender: "Boy", link: "#", image: model },
    { id: 3, age_gender: "Girls", link: "#", image: model },
  ];

  // const handleFiltering = (age_gender) => {
  //   setSharedData(age_gender);
  // };

  return (
    <div className="App">
      <Navbar />

      <section className="banner">
        <div className="banner-image-div">
          <div className="design-image-div">
            <img src={model} alt="Banner" className="banner-image " />
            <div className="background"></div>
          </div>
        </div>
        <div className="banner-content">
          <h2>Trendy Collection’s</h2>
          <h1>HIGHEST QUALITY COLLECTION</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo
            instituto veterum.
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />

      <section className="premium-shades">
        <h2>Premium Shades</h2>
        <div className="shades-flex">
          {shades.map((shade, index) => (
            <div className="item" key={index}>
              <div className="shade-item" key={index}>
                <div className="item-content">
                  <div className="item-txt">
                    <h2>{shade.age_gender}</h2>

                    <a> Go now</a>
                  </div>

                  <img
                    className="image"
                    src={shade.image}
                    alt={shade.age_gender}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
