import { Layout } from "./layout/Layout";
import Contact from "./pages/Contact";
import HowITeach from "./pages/HowITeach";
import Offer from "./pages/Offer";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import Welcome from "./pages/Welcome";
import logo from "./asstes/images/logo-pion.png";
import About from "./pages/About";
import "./styles/custom.css";
import "./styles/media_queries.css";


function App() {
  return (
    <>
      {/* <div
        className="build"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "24px",
          backgroundColor: "#E4D8D4",
          color: "#572B86",
        }}
      >
        <img 
          src={logo} 
          alt="Logo" 
          style={{
            width: "350px",
            height: "auto",
            marginBottom: "50px",
          }} 
        />
        <p style={{ fontWeight: "bold"}}>Tworzę się dla Ciebie</p>
        <p>
          <span style={{ fontWeight: "bold"}}>E-mail: </span>biuro@szkolainsideout.pl
        </p>
        <p>
          <span style={{ fontWeight: "bold"}}>Telefon: </span>+48 727-938-163
        </p>
      </div>  */}
       {/* <div style={{ display: "none" }}> */}
        <div className="App">
          <Layout>
            <Welcome />
            <About />
            <HowITeach />
            <Offer />
            <Pricing />
            <Reviews />
            <Contact />
          </Layout>
        </div>
      {/* </div> */}
    </>
  );
}

export default App;
