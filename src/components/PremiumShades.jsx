import "../CSS/PremiumShades.css";
import model from "../assets/model3.png";

function PremiumShades() {
  const shades = [
    { title: "Men", link: "#", image: model },
    { title: "Women", link: "#", image: model },
    { title: "Kids", link: "#", image: model },
    { title: "Unisex", link: "#", image: model },
  ];

  return (
    <section className="premium-shades">
      <h2>Premium Shades</h2>
      <div className="shades-flex">
        {shades.map((shade, index) => (
          <div className="item">
            <div className="shade-item" key={index}>
              <div className="item-content">
                <div className="item-txt">
                  <h2>{shade.title}</h2>
                  <a href={shade.link}>Go now</a>
                </div>

                <img className="image" src={shade.image} alt={shade.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PremiumShades;