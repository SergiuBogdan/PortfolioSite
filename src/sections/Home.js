import React from "react";
import heroImage from "../assets/images/heroimg.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-between pt-20 md:pt-32 flex-wrap overflow-hidden h-[calc(100vh-52px)]"
    >
      <div className="w-full md:w-1/2 text-center order-2 md:order-1">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 font-light"
        >
          <span className="text-xl md:text-2xl tracking-tighter">
            Hello I'm
          </span>
          <br />
          <span className="uppercase font-bold tracking-tighter text-3xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-md">
            Sergiu
          </span>
          <br />
          <span className="text-lg md:text-xl tracking-tighter">
            Nice to meet you!
          </span>
          <br />
          <span>Have a look on my page.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#aboutme"
            className="bg-cyan-800 hover:bg-cyan-700 text-stone-50 py-2 px-6 rounded-md transition-all duration-150 font-light"
          >
            Explore
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 flex items-center justify-center order-1"
      >
        <img src={heroImage} alt="home" className="w-5/6 brightness-95" />
      </motion.div>
    </section>
  );
};

export default Home;
