import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Project from "../Project/Project";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Skill from "../Skills/Skill";

const Home = () => {
  return (
    <div>
      <div className="max-w-fit">
        <Navbar />
      </div>
      <div className="pt-[88px]">
        <Banner />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skill />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
