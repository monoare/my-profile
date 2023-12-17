import Title from "../Shared/Title";
import { FaDownload } from "react-icons/fa";
import profile from "../../assets/images/800kb.jpg";

const About = () => {
  return (
    <div name="about" className="bg-gray-100">
      <div>
        <Title title={"Discover who I am"} />
        <p className="text-center leading-normal max-w-3xl mx-auto font-mont md:text-xl mt-5 md:mt-10 lg:mb-20 px-10 lg:px-0">
          Embark on a journey to learn more about me, a dedicated MERN stack
          front-end developer passionate about crafting seamless web experiences
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto pb-7 md:pb-14">
        <div className="md:w-[45vw] pt-5 md:pt-10">
          <img
            className="w-[60vw] md:w-full"
            src={profile}
            alt="profile image"
          />
        </div>
        <div className="md:w-[45vw] font-mont">
          <div className="text-center mt-7 md:mt-14">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold uppercase mb-2 md:mb-5">
              Monoare Hossain
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium lg:font-bold">
              Passionate Wev Developer
            </p>
            <p className="mt-4 md:mt-8 mb-4 md:ml-5 text-justify px-10 md:px-0">
              I&apos;m a{" "}
              <span className="text-green-600 font-medium">MERN</span> stack
              front-end developer from Sirajganj, Bangladesh. &quot;Diving into
              Next.js as part of my ongoing learning journey, I&apos;m
              passionate about creating seamless web experiences that merge
              functionality with aesthetic appeal.&quot; My journey involves
              translating ideas into visually striking and performant websites.
              Beyond coding, I explore my artistic side through photography,
              capturing moments that narrate unique stories. Currently diving
              into Next.js, I&apos;m dedicated to staying at the forefront of
              technology. My portfolio reflects a blend of technical prowess and
              creative finesse. Join me in this journey where innovation and art
              converge, transforming digital aspirations into captivating
              realities.
            </p>
            <div className="flex justify-center">
              <a
                href="../../assets/Resume/Monoare academic CV.pdf" // Update the path to your actual resume file
                download="Monoare_Resume.pdf" // Specify the desired name for the downloaded file
              >
                <button className="flex gap-2 items-center py-2 px-4 bg-[#0099E6] text-white font-bold hover:scale-105">
                  <FaDownload /> Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
