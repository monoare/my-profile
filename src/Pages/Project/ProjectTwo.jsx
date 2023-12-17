import backgroundImage from "../../assets/images/shapelined.jpg";
import projectTwoImg from "../../assets/images/freelancehub.png";
import { motion } from "framer-motion";
import { FaDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Helmet } from "react-helmet-async";

const ProjectTwo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Case Study of FreelanceHub</title>
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
                FreelanceHub
              </h1>
              <p className="my-12 px-5 md:px-0 text-base md:text-xl leading-relaxed">
                This page contains the case study of{" "}
                <span className="font-bold text-[#0099E6]">FreelanceHub</span>{" "}
                which includes the Project Overview, Tools Used and Live Links
                to the official product.
              </p>
              <a
                href="https://freelancehub-45daa.web.app"
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
            <div className="h-[50vh] overflow-y-auto scrollbar-hide md:mx-0 border-4 border-[#0099E6]">
              <img src={projectTwoImg} alt="freelanceHub" />
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
              Welcome to FreelanceHub, a platform connecting freelancers and
              employers. This project allows users to post jobs, submit bids,
              and manage their freelancing activities.
            </p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-8">
              Project Features
            </h2>
            <p className="pb-1">
              <span className="font-semibold">Quick Job Interaction:</span> Post
              and apply for jobs effortlessly, fostering efficient connections
              between freelancers and employers.
            </p>
            <p className="pb-1">
              <span className="font-semibold">
                User Authentication and Registration:
              </span>{" "}
              Sign up, log in, and social login options for users.
            </p>
            <p className="pb-1">
              <span className="font-semibold"> Secure Authentication:</span>{" "}
              Robust user authentication with JWT tokens ensures a safe and
              trustworthy freelancing experience.
            </p>
            <p className="pb-1">
              <span className="font-semibold">User-Friendly Dashboard:</span>{" "}
              Manage posted jobs, track applications, and review bidding history
              through a convenient and personalized dashboard.
            </p>
            <p className="pb-2">
              <span className="font-semibold">Categorized Job Listings:</span>{" "}
              Jobs are categorized for easy filtering, simplifying the job
              search process for freelancers.
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
            <div className="flex justify-center md:justify-start flex-wrap gap-5 ">
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

          <div>
            <h2 className="text-xl text-center md:text-left md:text-2xl font-bold mb-8">
              See Live
            </h2>
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://freelancehub-45daa.web.app"
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

export default ProjectTwo;
