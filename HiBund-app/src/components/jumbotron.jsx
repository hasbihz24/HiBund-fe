import JumbotronLeft from "./jumbotron-left";
function Jumbotron() {
    return (
        <div className="jumbotron-container">
            <JumbotronLeft />
            <img src="jumbo-pic.png" className="jumbo-pic" />
        </div>
    );
}
export default Jumbotron;
