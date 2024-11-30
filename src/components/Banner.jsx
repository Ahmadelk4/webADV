import "../CSS/Banner.css";
import model from "../assets/model3.png";

function Banner() {
  return (
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
  );
}

export default Banner;
