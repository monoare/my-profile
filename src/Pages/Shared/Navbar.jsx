// import { NavLink } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  const Navlinks = (
    <>
      {/* ---------Home--------- */}
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-88}
        duration={500}
        onSetActive={() => handleSetActive("home")}
        className={
          activeLink === "home"
            ? "text-[#00B6FF] py-2 md:py-4 cursor-pointer bg-white rounded-box px-4"
            : "cursor-pointer py-2 md:py-4 px-4"
        }
      >
        Home
      </Link>

      {/* ---------About--------- */}
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-88}
        duration={500}
        onSetActive={() => handleSetActive("about")}
        className={
          activeLink === "about"
            ? "text-[#00B6FF] py-2 md:py-4 cursor-pointer bg-white rounded-box px-4"
            : "cursor-pointer py-2 md:py-4 px-4"
        }
      >
        About
      </Link>

      {/* ---------Skills--------- */}
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-88}
        duration={500}
        onSetActive={() => handleSetActive("skills")}
        className={
          activeLink === "skills"
            ? "text-[#00B6FF] py-2 md:py-4 cursor-pointer bg-white rounded-box px-4"
            : "cursor-pointer py-2 md:py-4 px-4"
        }
      >
        Skills
      </Link>

      {/* ---------Projects--------- */}
      <Link
        activeClass="active"
        to="project"
        spy={true}
        smooth={true}
        offset={-88}
        duration={500}
        onSetActive={() => handleSetActive("project")}
        className={
          activeLink === "project"
            ? "text-[#00B6FF] py-2 md:py-4 cursor-pointer bg-white rounded-box px-4"
            : "cursor-pointer py-2 md:py-4 px-4"
        }
      >
        Projects
      </Link>

      {/* ---------Educational Background--------- */}
      <Link
        activeClass="active"
        to="education"
        spy={true}
        smooth={true}
        offset={-88}
        duration={500}
        onSetActive={() => handleSetActive("education")}
        className={
          activeLink === "education"
            ? "text-[#00B6FF] py-2 md:py-4 cursor-pointer bg-white rounded-box px-4"
            : "cursor-pointer py-2 md:py-4 px-4"
        }
      >
        Educational Background
      </Link>

      {/* ---------Contact--------- */}
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-88}
        duration={500}
        onSetActive={() => handleSetActive("contact")}
        className={
          activeLink === "contact"
            ? "text-[#00B6FF] py-2 md:py-4 cursor-pointer bg-white rounded-box px-4"
            : "cursor-pointer py-2 md:py-4 px-4"
        }
      >
        Contact
      </Link>
    </>
  );

  return (
    <div className="flex items-center justify-between p-5 text-white font-bold font-mont md:px-10 uppercase fixed z-50 bg-black w-full">
      <div className="flex items-center">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={avatar} />
          </div>
        </div>
        <p className="pl-5 uppercase">Monoare Hossain</p>
      </div>
      <div>
        <div className="hidden lg:flex md:justify-end gap-10">{Navlinks}</div>
      </div>
      <div className="dropdown dropdown-end lg:hidden">
        <details className="dropdown">
          <summary onClick={() => setClick(!click)} className="btn">
            {click ? (
              <GrClose className="text-xl" />
            ) : (
              <GiHamburgerMenu className="text-xl" />
            )}
          </summary>
          <ul className="absolute top-[68px] text-right -right-4 flex flex-col mr-4 shadow-lg z-[1] bg-gray-400 rounded-box w-72">
            {click ? Navlinks : ""}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
