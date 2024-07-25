import Jumbotron from "../components/jumbotron";
import Company from "../components/company";
import Introduction from "../components/introduction";
import Article from "../components/artikel";
import Consultation from "../components/consultation";
import Join from "../components/Join";
import Testimonial from "../components/testimonial";
import "./home.css";
function Home() {
  return (<div>
    <Jumbotron />
    <div className="linebreak"></div>
    <Company />
    <div className="linebreak"></div>
    <Introduction />
    <div className="linebreak"></div>
    <h2 className="mx-5 font-intro my-12">Artikel & Panduan</h2>
    <Article />
    <div className="linebreak"></div>
    <Consultation />
    <div className="linebreak"></div>
    <Join />
    <div className="linebreak"></div>
    <Testimonial />
    <div className="linebreak2"></div>
  </div>);
}
export default Home;
