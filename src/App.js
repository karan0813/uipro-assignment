import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Comp/Navbar"
import Card from './Comp/Card';
import VisionCard from './Comp/VisionCard';
import Careercard from './Comp/Careercard';
import TestimonilVideo from './Comp/TestimonilVideo';
import JobProfile from './Comp/JobProfile';
import Footer from './Comp/Footer';
import Downlod from './Comp/Downlod';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Comp/About';
import Contect from './Comp/Contect';
import Blogs from './Comp/Blogs';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Card />
            <VisionCard />
            <h1 className="text-center p-4 text-info ">Our Services</h1>
            <Careercard />
            <TestimonilVideo />
           <JobProfile />
           <Footer IStrue={true} />
            <Downlod/>
      
            
          </Route>
          <Route path="/about" exact>
            <About />
            <Footer />
            <Downlod/>
          </Route>
          <Route path="/contect" exact>
            <Contect />
            <Footer IStrue={false} />
            <Downlod/>

          </Route>
          <Route path="/blogs" exact>
            <Blogs/>            
            <Footer IStrue={false} />
            <Downlod/>

          </Route>
        </Switch>
      </Router>
      {/* navbar */}
      {/* Card */}
      
    </>
  );
}

export default App;
