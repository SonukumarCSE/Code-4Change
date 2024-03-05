import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
 
  Works,
  
  StarsCanvas,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";
import FAQ from './components/faq';
// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      {/* <Banner hide={hide} setHide={setHide} /> */}
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Contact />
          
        </div>
        <About />
        <Experience />
        
        
        
        
        {/* <Works /> */}
        {/* <Hero /> */}
        <Feedbacks />
        <FAQ />
        <Tech />
        {/* Contact */}
        <div className="relative z-0">
          
          <StarsCanvas />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
