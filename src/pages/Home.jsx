import model from "../assets/model3.png";
import Navbar from "../components/Navbar";
import "../CSS/Home.css";

import { Link } from "react-router-dom";

export default function Home() {
  const shades = [
    { id: 0, clothesCategories: "Men", link: "#", image: model },
    { id: 1, clothesCategories: "Women", link: "#", image: model },
    { id: 2, clothesCategories: "Boys", link: "#", image: model },
    { id: 3, clothesCategories: "Girls", link: "#", image: model },
  ];

  return (
    <div className="App">
      <Navbar />

      <section className="about">
        <div className="about-image-div">
          <div className="design-image-div">
            <img src={model} alt="about" className="about-image " />
            <div className="background"></div>
          </div>
        </div>
        <div className="about-content">
          <h2>Trendy Collection’s</h2>
          <h1>HIGHEST QUALITY COLLECTION</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quam facilis vero perspiciatis.
          </p>
        </div>
      </section>
      <br />

      <section className="premium-shades">
        <h1>Premium Shades</h1>
        <div className="shades-flex">
          {shades.map((shade, index) => (
            <div className="item" key={index}>
              <div className="shade-item" key={index}>
                <div className="item-content">
                  <div className="item-txt">
                    <h2>{shade.clothesCategories} </h2>
                    <div>
                      <Link
                        className="filter-link"
                        to={`/shop?clothesCategories=${shade.clothesCategories}`}
                      >
                        Go now
                      </Link>
                    </div>
                  </div>

                  <img
                    className="image"
                    src={shade.image}
                    alt={shade.clothesCategories}
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
