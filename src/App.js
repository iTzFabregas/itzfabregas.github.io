import Navbar from "./components/Navbar";
//import Aboutme from "./components/Aboutme"
//import Projects from "./components/Projects"
//import Contact from "./components/Contact"
//import Footer from "./components/Footer"

import Aos from "aos";
import 'aos/dist/aos.css'

function App() {

  Aos.init();

  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
