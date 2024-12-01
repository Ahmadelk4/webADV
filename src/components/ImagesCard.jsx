import "../CSS/ProductPage.css";

const ImagesCard = ({ mainImage, thumbnails, onThumbnailClick }) => {
  return (
    <div className="product-images">
      <img src={mainImage} alt="Main product" className="main-image" />

      <div className="thumbnail-images">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            className="thumbnail-image"
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => onThumbnailClick(index)} // Swap main image on click
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesCard;
