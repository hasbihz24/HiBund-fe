import IntroductionLeft from "./introduction-left";
function Introduction() {
  return (
    <div className="ms-5 mt-5 container d-flex">
      <IntroductionLeft />
        <div className="row">
          <div className="col">
            <img src="img-1.png" style={{width: '280px'}}/>
            <img src="img-1.png" style={{width: '200px'}}/>
          </div>
        </div>
    </div>
  );
}
export default Introduction;
