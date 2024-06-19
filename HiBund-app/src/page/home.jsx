import NavBar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Company from "../components/company";
import Introduction from "../components/introduction";
import Article from "../components/artikel";
import Consultation from "../components/consultation";
import Join from "../components/Join";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";
import "./home.css";
function Home() {
    return (<div>
      <NavBar />
      <Jumbotron />
      <Company />
      <Introduction />
      <div className="linebreak"></div>
      <h1 className="mx-5 font-intro my-5">Artikel & Panduan</h1>
      <Article />
      <div className="linebreak"></div>
      <Consultation />
      <div className="linebreak"></div>
      <Join />
      <div className="linebreak"></div>
      <Testimonial />
      <div className="linebreak2"></div>
      <Footer />
    </div>);
}
export default Home;