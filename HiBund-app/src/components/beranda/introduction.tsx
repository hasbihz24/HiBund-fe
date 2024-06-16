import IntroductionLeft from "./introduction-left";
const images = [
  { id: 1, src: "img-1.png", alt: "img 1" },
  { id: 2, src: "child-2.png", alt: "img 2" },
  { id: 3, src: "child.png", alt: "img 3" },
];
function Introduction() {
  return (
    <div className="ms-5 mt-5 container d-flex">
      <IntroductionLeft />
      <div className="gallery">
        <div className="gallery-item large">
          <img src={images[0].src} alt={images[0].alt} />
        </div>
        <div className="gallery-column">
          {images.slice(1).map((image) => (
            <div key={image.id} className="gallery-item small">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
export default Introduction;
