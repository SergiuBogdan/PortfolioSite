import CV from "../assets/cv/CV_Catana_Sergiu Bogdan_en.pdf";
import DIPLOMA from "../assets/diploma/Diploma.jpg";
import { TbDownload } from "react-icons/tb";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-1 sticky top-0 left-0 z-50 shadow-sm bg-stone-50"
    >
      <nav className="container mx-auto p-2 flex flex-col md:flex-row items-center justify-between font-light">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#top" className="uppercase tracking-tighter text-xl">
            Catana Sergiu Bogdan
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center"
        >
          <ul className="flex items-center mt-2 md:mt-0">
            <li className="mr-3">
              <a
                href="#top"
                className="text-sm md:text-base hover:text-black transition-all duration-150"
              >
                Home
              </a>
            </li>
            <li className="mr-3">
              <a
                href="#aboutme"
                className="text-sm md:text-base hover:text-black transition-all duration-150"
              >
                About
              </a>
            </li>
            <li className="mr-3">
              <a
                href="#experience"
                className="text-sm md:text-base hover:text-black transition-all duration-150"
              >
                Experience
              </a>
            </li>
            <li className="mr-3">
              <a
                href="#projects"
                className="text-sm md:text-base hover:text-black transition-all duration-150"
              >
                Projects
              </a>
            </li>
            <li className="mr-0 md:mr-3">
              <a
                href="#contact"
                className="text-sm md:text-base hover:text-black transition-all duration-150"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href={CV}
            download
            className="flex bg-cyan-800 text-white rounded-md py-1 px-2 text-sm hover:bg-cyan-700 transition-all duration-150 mt-3 md:mt-0"
          >
            <TbDownload className="text-lg mr-1" /> CV
          </a>
          <a
            href={DIPLOMA}
            download
            className="flex bg-cyan-800 text-white rounded-md py-1 px-2 text-sm hover:bg-cyan-700 transition-all duration-150 mt-3 md:mt-0 ml-2"
          >
            <TbDownload className="text-lg mr-1" /> Diploma
          </a>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Header;
