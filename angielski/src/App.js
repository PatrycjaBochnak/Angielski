import { Layout } from "./layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowITeach from "./pages/HowITeach";
import Offer from "./pages/Offer";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <Layout >
      <Welcome />
      <About />
      <HowITeach />
      <Offer />
      <Pricing />
      <Reviews />
      <Contact />
      </Layout>
    </div>
  );
}

export default App;
