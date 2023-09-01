import { useState } from "react";
import photo from "../assets/images/me.png";
import { HiCode, HiOutlineSwitchHorizontal } from "react-icons/hi";
import { MdSkateboarding } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <section
      id="aboutme"
      className="mt-32 bg-gradient-to-tr from-slate-950 to-cyan-800 py-10 px-2 xl:px-64"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="uppercase text-lg tracking-tighter font-light text-center text-stone-50 mb-10"
      >
        About me
      </motion.h2>
      <div className="flex items-start justify-between flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2 px-2 md:px-10 py-10"
        >
          <img
            src={photo}
            alt="myPhoto"
            className="rounded-2xl w-96 brightness-90 ms-auto"
          />
          <div className="mt-3 text-stone-50 text-right">
            <p className="uppercase tracking-tighter">Sergiu</p>
            <p className="text-sm font-light">Open for work!</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2 px-2 md:px-10 py-10"
        >
          <div className="w-20 me-auto rounded-full h-10 shadow-inner relative bg-stone-50">
            <button
              onClick={toggleHandler}
              className={`bg-cyan-800 w-8 h-8 rounded-full mt-1 ml-1 transition-all duration-150 text-xs text-white ${
                toggle === false && "translate-x-10"
              }`}
            >
              <HiOutlineSwitchHorizontal className="text-lg mx-auto text-stone-50" />
            </button>
            <HiCode
              className={`absolute top-2.5 left-3 text-xl pointer-events-none transition-all duration-150 ${
                toggle === true && "opacity-0"
              }`}
              fill="#000"
            />
            <MdSkateboarding
              className={`absolute top-2.5 right-3 text-xl pointer-events-none transition-all duration-150 ${
                toggle === false && "opacity-0"
              }`}
              fill="#000"
            />
          </div>
          <div className="w-full lg:w-96 lg:h-96 mt-4 rounded-2xl text-black p-6 shadow-inner bg-stone-50">
            {toggle === true ? (
              <div>
                <h3 className="text-center uppercase tracking-tighter font-bold text-cyan-800">
                  A good day
                </h3>
                <p className="mt-6 font-light">
                  An curious person, I possess an insatiable thirst for
                  knowledge. My interests span from video games to savoring
                  delectable meals. During my earlier days, I had an inclination
                  for web development (2010-2012). I relish spending leisure
                  hours with friends and immersing myself in films, series, and
                  animes,{" "}
                  <span className="text-cyan-800 font-bold">coding</span>.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-center uppercase tracking-tighter font-bold text-cyan-800">
                  My journey
                </h3>
                <p className="mt-6 font-light">
                  A few years back, I steped into the world of{" "}
                  <span className="text-cyan-800 font-bold">coding</span>{" "}
                  kickstarting my journey with HTML and CSS to craft and style
                  web pages. My enthusiasm grew as I delved into Udemy courses,
                  where I expanded my skills by integrating JavaScript into my
                  toolkit. Nowadays, I've progressed to using ReactJS for
                  building single-page applications. I've also taken on more
                  advanced challenges like developing E-Commerce platforms
                  utilizing React-Redux for enhanced state management.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
