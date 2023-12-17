import Title from "../Shared/Title";
import educationImg from "../../assets/images/mechanical to Web.jpg";

const Education = () => {
  return (
    <div name="education">
      <Title title={"Academic Journey"} />
      <p className="text-center leading-normal md:max-w-3xl mx-auto font-mont md:text-xl mt-5 md:mt-10 mb-2 md:mb-10 lg:mb-20 px-10 lg:px-0">
        Discover my educational background, bridging the gap from Mechanical
        Engineering to a passionate pursuit of web development
      </p>

      <div className="max-w-6xl font-mont mx-auto flex flex-col md:items-center md:flex-row gap-5 lg:gap-20 mb-10 lg:mb-20 px-10 lg:px-0">
        <div className="md:w-[450px] mx-auto">
          <img className="md:w-[450px]" src={educationImg} alt="" />
        </div>
        <div className="mx-auto text-center md:text-left">
          <h2 className="md:text-xl font-semibold mb-4">
            Degrees Earned, Lessons Learned
          </h2>
          <div className="mb-2">
            <p className="font-medium md:font-bold">
              Bachelor of Science in Mechanical Engineering
            </p>

            <p>
              Major:{" "}
              <span className="md:font-semibold">Mechanical Engineering</span>
            </p>
            <p>
              University:{" "}
              <span className="md:font-semibold">
                Khulna University of Engineering & Technology (KUET)
              </span>
            </p>
            <p>
              Graduation Year: <span className="md:font-semibold">2014</span>
            </p>
          </div>
          <div>
            <p className="font-medium md:font-bold">
              MERN Stack Developer Certification
            </p>
            Track: <span className="md:font-semibold">MERN Stack</span>
            {/* Add additional details about your MERN Stack program */}
            <p>
              Institution:{" "}
              <span className="md:font-semibold">Programming Hero</span>
            </p>
            <p>
              Duration: <span className="md:font-semibold">6 months</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
