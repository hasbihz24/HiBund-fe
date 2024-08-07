import IntroductionLeft from "./introduction-left";
const images = [
  { id: 1, src: "img-1.png", alt: "img 1" },
  { id: 2, src: "child-2.png", alt: "img 2" },
  { id: 3, src: "child.png", alt: "img 3" },
];
function Introduction() {
  return (
    <div className="ms-9 mt-5 container flex">
      <IntroductionLeft />
      <div className="gallery">
        <div className="gallery-item large">
          <img className="w-full" src={images[0].src} alt={images[0].alt} />
        </div>
        <div className="flex flex-col">
          {images.slice(1).map((image) => (
            <div key={image.id} className="gallery-item small">
              <img className="w-full mb-2" src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Introduction;
