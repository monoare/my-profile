import ProgressBar from "@ramonak/react-progress-bar";
import Title from "../Shared/Title";
import frontEndImg from "../../assets/images/skill.jpg";
import backEndImg from "../../assets/images/backend.jpg";
import toolImg from "../../assets/images/tools.jpg";
import { useMediaQuery } from "react-responsive";

import {
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiCanva,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNetlify,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const Skill = () => {
  const isMediumScreen = useMediaQuery({
    query: "(max-width: 650px)",
  });
  return (
    <div name="skills" className="pb-7 md:pb-14">
      <Title title={"My Skillsets"} />

      <p className="text-center leading-normal md:max-w-3xl mx-auto font-mont md:text-xl mt-4 md:mt-10 md:mb-10 lg:mb-20 px-10 md:px-0">
        Explore my skillsets to discover detailed insights into my current
        programming and technological expertise.
      </p>
      <div className="font-mont max-w-6xl mx-10 lg:mx-auto">
        {/* Front End */}
        <h2 className="text-center text-lg md:text-2xl font-semibold my-4 py-1 md:py-2 border-y-[0.5px] md:border-y-2 border-black">
          Front End
        </h2>

        <div className="flex flex-col md:items-center md:justify-between md:flex-row gap-5 md:gap-10 lg:gap-20">
          <div className="md:w-[45vw] mx-auto md:mx-0">
            <img
              className="w-full h-[250px] md:h-[350px]"
              src={frontEndImg}
              alt="Front end image"
            />
          </div>

          <div className="md:w-[45vw]">
            {/* --------HTML-------- */}
            <div className="mb-4">
              <p className="text-[#E44F26] pb-2 flex items-center">
                <FaHtml5 /> <span className="pl-1">HTML</span>
              </p>
              <ProgressBar
                completed={90}
                borderRadius="0"
                bgColor="#E44F26"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>

            {/* --------CSS-------- */}
            <div className="mb-4">
              <p className="text-[#1572B6] pb-2 flex items-center">
                <FaCss3Alt />
                <span className="pl-1">CSS</span>
              </p>
              <ProgressBar
                completed={85}
                borderRadius="0"
                bgColor="#1572B6"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>

            {/* --------Tailwind-------- */}
            <div className="mb-4">
              <p className="text-[#36B7F0] pb-2 flex items-center">
                <SiTailwindcss />
                <span className="pl-1">Tailwind</span>
              </p>
              <ProgressBar
                completed={80}
                borderRadius="0"
                bgColor="#36B7F0"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>

            {/* --------JS-------- */}
            <div className="mb-4">
              <p className="text-[#F7CF00] pb-2 flex items-center">
                <IoLogoJavascript />
                <span className="pl-1">JS</span>
              </p>
              <ProgressBar
                completed={70}
                borderRadius="0"
                bgColor="#F7CF00"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>

            {/* --------React-------- */}
            <div className="mb-4">
              <p className="text-[#5ED3F3] pb-2 flex items-center">
                <FaReact />
                <span className="pl-1">React</span>
              </p>
              <ProgressBar
                completed={70}
                borderRadius="0"
                bgColor="#5ED3F3"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>
          </div>
        </div>

        {/* --------Back End-------- */}
        <p className="text-center text-lg md:text-2xl font-semibold my-4 py-1 md:py-2 border-y-[0.5px] md:border-y-2 border-black">
          Back End
        </p>
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center gap-5 md:gap-10 lg:gap-20">
          <div className="md:w-[45vw]">
            <img
              className="w-full h-[250px] md:h-[280px]"
              src={backEndImg}
              alt="Front end image"
            />
          </div>

          <div className="md:w-[45vw]">
            {/* --------Node JS-------- */}
            <div className="mb-4">
              <p className="text-[#6caa6b] pb-2 flex md:flex-row-reverse items-center">
                <FaNodeJs />{" "}
                <span className="md:pr-1 pl-1 md:pl-0">Node JS</span>
              </p>
              <ProgressBar
                completed={80}
                dir={isMediumScreen ? "ltr" : "rtl"}
                borderRadius="0"
                bgColor="#026E00"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>

            {/* --------MongoDB-------- */}
            <div className="mb-4">
              <p className="text-[#00ED64] pb-2 flex md:flex-row-reverse items-center">
                <SiMongodb />
                <span className="md:pr-1 pl-1 md:pl-0">MongoDB</span>
              </p>
              <ProgressBar
                completed={80}
                dir={isMediumScreen ? "ltr" : "rtl"}
                borderRadius="0"
                bgColor="#00ED64"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>

            {/* --------Express JS-------- */}
            <div className="mb-4">
              <p className="text-gray-800 pb-2 flex md:flex-row-reverse items-center">
                <SiExpress />{" "}
                <span className="md:pr-1 pl-1 md:pl-0">Express JS</span>
              </p>
              <ProgressBar
                completed={85}
                dir={isMediumScreen ? "ltr" : "rtl"}
                borderRadius="0"
                bgColor="#1F2937"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>

            {/* --------Firebase-------- */}
            <div className="mb-4">
              <p className="text-[#F7C52B] pb-2 flex md:flex-row-reverse items-center">
                <SiFirebase />{" "}
                <span className="md:pr-1 pl-1 md:pl-0">Firebase</span>
              </p>
              <ProgressBar
                completed={90}
                dir={isMediumScreen ? "ltr" : "rtl"}
                borderRadius="0"
                bgColor="#F7C52B"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>
          </div>
        </div>

        {/* Tools */}
        <p className="text-center text-lg md:text-2xl font-semibold my-4 py-1 md:py-2 border-y-[0.5px] md:border-y-2 border-black">
          Tools
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-10 lg:gap-20">
          <div className="md:w-[45vw]">
            <img
              className="w-full h-[250px] md:h-[350px]"
              src={toolImg}
              alt="Front end image"
            />
          </div>

          <div className="md:w-[45vw]">
            {/* --------Netlify-------- */}
            <div className="mb-4">
              <p className="text-[#00BEBB] pb-2 flex items-center">
                <SiNetlify /> <span className="pl-1">Netlify</span>
              </p>
              <ProgressBar
                completed={90}
                borderRadius="0"
                bgColor="#00BEBB"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>

            {/* --------Vercel-------- */}
            <div className="mb-4">
              <p className="text-[#000000] pb-2 flex items-center">
                <SiVercel /> <span className="pl-1">Vercel</span>
              </p>
              <ProgressBar
                completed={85}
                borderRadius="0"
                bgColor="#000000"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>

            {/* --------Canva-------- */}
            <div className="mb-4">
              <p className="text-[#513DEA] pb-2 flex items-center">
                <SiCanva /> <span className="pl-1">Canva</span>
              </p>
              <ProgressBar
                completed={70}
                borderRadius="0"
                bgColor="#513DEA"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>

            {/* --------Figma-------- */}
            <div className="mb-4">
              <p className="text-[#F34E1D] pb-2 flex items-center">
                <FaFigma /> <span className="pl-1">Figma</span>
              </p>
              <ProgressBar
                completed={70}
                borderRadius="0"
                bgColor="#F34E1D"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>
            {/* --------GitHub-------- */}
            <div className="mb-4">
              <p className="text-[#161414] pb-2 flex items-center">
                <FaGithub /> <span className="pl-1">GitHub</span>
              </p>
              <ProgressBar
                completed={70}
                borderRadius="0"
                bgColor="#161414"
                labelSize="10px"
                transitionDuration="5s"
                animateOnRender={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
