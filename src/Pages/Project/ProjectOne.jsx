import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import backgroundImage from "../../assets/images/shapelined.jpg";
import projectOneImg from "../../assets/images/vigor-vista.png";
import { motion } from "framer-motion";
import { FaDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProjectOne = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Case Study of Vigor Vista</title>
      </Helmet>
      <Navbar />
      <div className="font-mont pt-[88px]">
        <div
          className="hero min-h-[calc(100vh-88px)]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-extrabold uppercase">
                Vigor Vista
              </h1>
              <p className="my-12 px-5 md:px-0 text-base md:text-xl leading-relaxed">
                This page contains the case study of{" "}
                <span className="font-bold text-[#0099E6]">Vigor Vista</span>{" "}
                which includes the Project Overview, Tools Used and Live Links
                to the official product.
              </p>
              <a
                href="https://vigor-vista.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-base md:text-2xl rounded-md font-bold uppercase px-5 md:px-20 py-2 md:py-4 bg-[#0099E6] hover:scale-105 hover:transition-all">
                  Live Link
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-xs md:max-w-xl lg:max-w-3xl mx-auto mt-7 md:mt-14">
          <h2 className="text-xl text-center md:text-left md:text-2xl font-bold mb-8">
            Project Demo
          </h2>
          <div className="relative">
            <div className="h-[300px] md:h-[350px] overflow-y-auto scrollbar-hide mx-2 md:mx-0 border-4 border-[#0099E6]">
              <img src={projectOneImg} alt="" />
            </div>
            <motion.p
              animate={{ y: 40 }}
              transition={{
                duration: 0.8,
                type: "linear",
                repeat: Infinity,
              }}
              className="relative"
            >
              <FaDownLong
                size={30}
                className="relative text-yellow-600 bottom-20 left-1/2"
              />
            </motion.p>
          </div>
        </div>
        <div className="mx-10 md:mx-24 lg:mx-auto md:max-w-xl lg:max-w-3xl md:mt-10 mb-7 md:mb-14">
          <h2 className="text-xl text-left md:text-2xl font-bold mb-8">
            Project Overview
          </h2>
          <div className="mb-7 md:mb-14">
            <p>
              The project, tentatively named <span>Vigor Vista</span> is a web
              application designed to cater to fitness enthusiasts, providing a
              platform for various fitness-related activities, community
              engagement, and personalized user experiences.
            </p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-8">
              Project Features
            </h2>
            <p className="pb-1">
              <span className="font-semibold">
                Role-Based Dashboard Navigation:
              </span>{" "}
              Different dashboard views for admin, trainer, and member roles.
            </p>
            <p className="pb-1">
              <span className="font-semibold">
                User Authentication and Registration:
              </span>{" "}
              Sign up, log in, and social login options for users.
            </p>
            <p className="pb-1">
              <span className="font-semibold">
                {" "}
                Content Management for Admin:
              </span>{" "}
              Manage subscribers, trainers, balance, and handle trainer
              applications.
            </p>
            <p className="pb-1">
              <span className="font-semibold">
                Trainer-Specific Functionality:
              </span>{" "}
              Manage slots, members, add new forums, and create new classes.
            </p>
            <p className="pb-2">
              <span className="font-semibold">Member-Specific Features:</span>{" "}
              View activity logs, adjust profile settings, and access
              recommended classes.
            </p>
            <p className="mb-7 md:mb-14">
              For more features, please visit the live link.
            </p>
          </div>

          {/* ---------Tools Used--------- */}
          <div className="mb-7 md:mb-14">
            <h2 className="text-xl text-center md:text-left md:text-2xl font-bold mb-8">
              Tools Used
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-5 ">
              <p className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-gray-200 font-medium rounded-md">
                HTML
              </p>
              <p className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-gray-200 font-medium rounded-md">
                CSS
              </p>
              <p className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-gray-200 font-medium rounded-md">
                Tailwind
              </p>
              <p className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-gray-200 font-medium rounded-md">
                DaisyUI
              </p>
              <p className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-gray-200 font-medium rounded-md">
                JavaScript
              </p>
              <p className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-gray-200 font-medium rounded-md">
                ReactJS
              </p>
              <p className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-gray-200 font-medium rounded-md">
                NodeJS
              </p>
              <p className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-gray-200 font-medium rounded-md">
                MongoDB
              </p>
              <p className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-gray-200 font-medium rounded-md">
                ExpressJS
              </p>
              <p className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-gray-200 font-medium rounded-md">
                Firebase
              </p>
              <p className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-gray-200 font-medium rounded-md">
                Vercel
              </p>
              <p className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-gray-200 font-medium rounded-md">
                GitHub
              </p>
            </div>
          </div>

          {/* ---------See Live Section--------- */}
          <div>
            <h2 className="text-xl text-center md:text-left md:text-2xl font-bold mb-8">
              See Live
            </h2>
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://vigor-vista.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="md:text-xl rounded-md font-bold uppercase px-4 md:px-10 py-2 md:py-3 bg-[#0099E6] hover:scale-105 hover:transition-all text-white">
                  Live Link
                </button>
              </a>
              <button
                onClick={() => navigate("/")}
                className="md:text-xl rounded-md font-bold uppercase px-4 md:px-10 py-2 md:py-3 border md:border-2 border-[#0099E6] hover:scale-105 hover:transition-all"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectOne;
