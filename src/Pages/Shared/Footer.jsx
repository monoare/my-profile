import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-black pb-4 px-10 lg:px-0">
      <footer className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between md:gap-5 py-5 font-mont text-white">
        <nav className="max-w-lg mt-5">
          <p className="md:text-xl uppercase font-bold mb-6">Monoare Hossain</p>
          <p className="text-xs leading-6">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </nav>

        <nav className="md:mt-5">
          <header className="md:text-xl uppercase font-bold mb-3 md:pl-4">
            Social
          </header>
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/md-monoare-hossain-14190498"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#0C61BF] p-2 md:p-4 cursor-pointer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/monoare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#536A7B] p-2 md:p-4 cursor-pointer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.fiverr.com/monoare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#1CB96F] p-2 md:p-4 cursor-pointer"
            >
              <TbBrandFiverr size={20} />
            </a>
          </div>
        </nav>
      </footer>
      <p className="max-w-6xl mx-auto my-3 border-b-[0.1px] border-gray-500"></p>
      <p className="p-5 px-6 text-[12px] md:px-20 text-center text-white">
        Copyright © 2023. Made by{" "}
        <span className="underline">Monoare Hossain</span>
      </p>
    </div>
  );
};

export default Footer;
