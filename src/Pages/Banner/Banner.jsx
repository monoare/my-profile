import backgroundImage from "../../assets/images/shapelined.jpg";
import Typewriter from "react-ts-typewriter";
import { HiChevronDoubleDown } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div name="home" className="font-mont">
      <div
        className="hero min-h-[calc(100vh-88px)]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center">
          <div className="max-w-5xl text-black">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
              <Typewriter text="HEY, I'M MONOARE HOSSAIN" />
            </h1>
            <p className="px-10 lg:px-0 my-5 md:my-14 md:text-2xl">
              <Typewriter text="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product" />
            </p>
            <button className="py-2 md:py-4 px-4 md:px-20 rounded-md bg-[#00B6FF] md:text-xl uppercase hover:scale-105 transition-all font-bold text-white">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-88}
                duration={500}
              >
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-88}
        duration={500}
      >
        <motion.p
          animate={{ y: 40 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 80,
            repeat: Infinity,
            damping: 20,
          }}
          className="relative"
        >
          <HiChevronDoubleDown
            size={30}
            className="absolute cursor-pointer text-[#00B6FF] bottom-20 left-[calc(50vw-20px)]"
          />
        </motion.p>
      </Link>
    </div>
  );
};

export default Banner;
