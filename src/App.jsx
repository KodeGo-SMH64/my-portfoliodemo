import { BrowserRouter } from "react-router-dom"

import { 
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
 } from './components';
// import { Landing } from "./components/Landing";

const App = () => {
  return (
   <BrowserRouter>
    {/* <div>
      <Landing/>
    </div> */}
    <div className="relative z-0 bg-primary">
      <div className="
      bg-hero-pattern
      bg-cover
      bg-no-repeat
      bg-center">
          <Navbar/>
          <Hero/>
      </div>
        <About/>
        <Experience/>
        <Works/>
        <Tech/> 
        <Feedbacks />
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
    </div>
   </BrowserRouter>
  )
};

export default App
