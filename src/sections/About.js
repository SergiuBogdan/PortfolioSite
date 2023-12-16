import { useState } from "react";
import photo from "../assets/images/me.jpg";
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
                  Something about me
                </h3>
                <p className="mt-6 font-light">
                  Even though I love to code and explore new technologies, there
                  is more to life than this. Sometimes, you have to think about
                  yourself and do something for you. I'm not an interesting guy,
                  or a very social one, but there is one thing I can tell you:
                  I'm loyal, and I get things done no matter what.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-center uppercase tracking-tighter font-bold text-cyan-800">
                  How i started
                </h3>
                <p className="mt-6 font-light">
                  My first interaction with the world of web development was in
                  2012 when I created my first website using WordPress. Over the
                  span of two years, I developed approximately 10 websites and
                  forums using WordPress and Wix. After a long pause, I made the
                  decision to re-enter this domain, better prepared and
                  enthusiastic about learning new technologies. After extensive
                  research to determine the technologies that suited me best, I
                  eventually settled on HTML, CSS, JS, and React.
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
