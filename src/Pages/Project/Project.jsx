import Title from "../Shared/Title";
import projectOneImg from "../../assets/images/vigor-vista.png";
import projectTwoImg from "../../assets/images/freelancehub.png";
import projectThreeImg from "../../assets/images/bestShop.png";
import { motion } from "framer-motion";
import { FaDownLong } from "react-icons/fa6";

const Project = () => {
  const handleCaseStudyClick = (projectNumber) => {
    // Open the case study page in a new tab
    window.open(`/project${projectNumber}`, "_blank");
  };

  return (
    <div name="project" className="bg-gray-100">
      <Title title={"My Projects"} />
      <div className="pb-10 mx-w-6xl px-10 lg:px-0">
        <p className="text-center space-y-2 md:max-w-3xl mx-auto font-mont md:text-xl mt-5 md:mt-10 lg:mb-20 ">
          In this section, you&apos;ll discover a selection of my personal
          projects, each accompanied by its individual case study.
        </p>

        {/* --------Project - 1-------- */}
        <p className="text-center md:text-2xl font-semibold md:mt-10 my-4 md:my-8 md:py-2 border-black border-y-[0.5px] md:border-y-2 max-w-6xl mx-auto">
          First Project
        </p>

        <div className="max-w-6xl mx-auto flex flex-col md:items-center md:justify-between md:flex-row-reverse gap-5 lg:gap-20 md:mb-10">
          <div className="relative md:w-[45vw]">
            <div className="h-[33vh] lg:h-[45vh] overflow-y-auto scrollbar-hide  border-4 border-[#0099E6]">
              <img
                className="w-full"
                src={projectOneImg}
                alt="Vigor vista image"
              />
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
                className="absolute text-yellow-600 bottom-20 left-1/2"
              />
            </motion.p>
          </div>

          <div className="md:w-[45vw] lg:h-[250px] mx-auto md:mx-0">
            <h1 className="text-center md:text-right md:text-2xl font-bold md:mb-5">
              Vigor Vista
            </h1>
            <p className="text-center pb-2 my-2 lg:my-10 md:text-justify">
              The project, tentatively named &quot;Vigor Vista&quot; is a web
              application designed to cater to fitness enthusiasts, providing a
              platform for various fitness-related activities, community
              engagement, and personalized user experiences.
            </p>

            <div className="flex justify-center md:justify-end">
              <button
                onClick={() => handleCaseStudyClick("One")}
                className="hover:scale-110 bg-[#0099E6] px-2 md:px-8 py-1 md:py-4 text-white md:font-bold cursor-pointer"
              >
                Case Study
              </button>
            </div>
          </div>
        </div>

        {/* --------Project - 2-------- */}
        <p className="text-center md:text-2xl font-semibold md:mt-10 my-4 md:my-8 border-black md:py-2 border-y-[0.5px] md:border-y-2 max-w-6xl mx-auto">
          Second Project
        </p>
        <div className="max-w-6xl mx-auto flex flex-col md:items-center md:justify-between md:flex-row gap-5 lg:gap-20 mb-10">
          <div className="relative md:w-[45vw]">
            <div className="h-[33vh] lg:h-[45vh] overflow-y-auto scrollbar-hide border-4 border-[#0099E6]">
              <img
                className="w-full"
                src={projectTwoImg}
                alt="FreelanceHub image"
              />
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
                className="absolute text-yellow-600 bottom-20 left-1/2"
              />
            </motion.p>
          </div>

          <div className="md:w-[45vw] lg:h-[250px] mx-auto md:mx-0">
            <h1 className="text-center md:text-left md:text-2xl font-bold md:mb-5">
              FreelanceHub
            </h1>
            <p className="text-center pb-2 md:pb-0 my-2 md:my-5 md:text-justify">
              FreelanceHub is a dynamic platform connecting freelancers and
              employers. Users can effortlessly post and apply for jobs, benefit
              from secure authentication, and manage their activities through a
              user-friendly dashboard. Categorized job listings and a
              transparent booking system streamline the freelancing process,
              creating a seamless and efficient experience for both freelancers
              and employers.
            </p>

            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => handleCaseStudyClick("Two")}
                className="hover:scale-110 bg-[#0099E6] px-2 md:px-8 py-1 md:py-4 text-white md:font-bold"
              >
                Case Study
              </button>
            </div>
          </div>
        </div>

        {/* --------Project - 3-------- */}
        <p className="text-center md:text-2xl font-semibold md:mt-10 my-4 md:my-8 md:py-2 border-black border-y-[0.5px] md:border-y-2 max-w-6xl mx-auto">
          Third Project
        </p>

        <div className="max-w-6xl mx-auto flex flex-col md:items-center md:justify-between md:flex-row-reverse gap-5 lg:gap-20 md:mb-10">
          <div className="relative md:w-[45vw]">
            <div className="h-[33vh] lg:h-[45vh] overflow-y-auto scrollbar-hide border-4 border-[#0099E6]">
              <img
                className="w-full"
                src={projectThreeImg}
                alt="Best shop image"
              />
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
                className="absolute text-yellow-600 bottom-20 left-1/2"
              />
            </motion.p>
          </div>

          <div className="md:w-[45vw] lg:h-[250px] mx-auto md:mx-0">
            <h1 className="text-center md:text-right md:text-2xl font-bold md:mb-5">
              Best Shop
            </h1>
            <p className="text-center pb-2 my-2 md:my-5 md:text-justify">
              Best Shop is a versatile Fashion E-commerce platform with secure
              authentication, detailed product catalog, dark mode toggle,
              responsive design, and a user-friendly shopping cart. Featuring
              brand collections, dynamic data fetching, and alerts, it&apos;s a
              valuable tool for fashion enthusiasts and developers, primed for
              future enhancements in the industry.
            </p>

            <div className="flex justify-center md:justify-end">
              <button
                onClick={() => handleCaseStudyClick("Three")}
                className="hover:scale-110 bg-[#0099E6] px-2 md:px-8 py-1 md:py-4 text-white md:font-bold"
              >
                Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
