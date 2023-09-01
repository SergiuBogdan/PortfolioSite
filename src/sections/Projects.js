import mileniumStore from "../assets/images/reactEcomm.png";
import chatapp from "../assets/images/chatapp.png";
import weatherApp from "../assets/images/weatherApp.png";
import timeflow from "../assets/images/timeFlow.png";
import tictactoe from "../assets/images/TicTacToe.png";
import weatherUnderground from "../assets/images/weatherUnderground.png";
import abstractLines from "../assets/images/abstractLines.png";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevIndexHandler = () => {
    setActiveIndex(activeIndex - 1);
  };

  const nextIndexHandler = () => {
    setActiveIndex(activeIndex + 1);
  };

  const slides = [
    {
      id: 1,
      image: mileniumStore,
      title: "ReactECommSite - Milenium Store",
      description:
        "Full Stack e-commerce site where you can explore different beers, add items to cart and place order. As a beer lover you can order your favourite beer right to your home",
      stack: "HTML, CSS, Tailwind, JavaScript, React and .NET",
      demo: "#home",
      code: "https://github.com/SergiuBogdan/ReactECommSite",
    },
    {
      id: 2,
      image: chatapp,
      title: "React-Chat-App",
      description:
        "My first atempt to create a react chat app, It's site where you can chat with your friends.It uses Facebook, Google or E-mail authentification, many rooms where you can chat. ",
      stack: "HTML, CSS, JavaScript, React, Firebase",
      demo: "#home",
      code: "https://github.com/SergiuBogdan/React-Chat-App",
    },
    {
      id: 3,
      image: weatherApp,
      title: "WeatherApp",
      description:
        "React App using weather API to search for the current weather. Very precise on location and time.",
      stack: "HTML, CSS, JavaScript, React, WeatherAPI",
      demo: "#home",
      code: "https://github.com/SergiuBogdan/WeatherApp",
    },
    {
      id: 4,
      image: weatherUnderground,
      title: "WeatherUnderground",
      description: "One of my first sites created using HTML and CSS",
      stack: "HTML, CSS",
      demo: "#home",
      code: "https://github.com/SergiuBogdan/WeatherUnderground",
    },
    {
      id: 5,
      image: timeflow,
      title: "TimeFlow",
      description:
        "Full Stack application using React and .NET, and performing CRUD operations, you can add the places you visited, delete the places or edit them. Currently under development.",
      stack: "HTML, Semantic UI, JavaScript, React, .NET",
      demo: "#home",
      code: "#home",
    },
    {
      id: 6,
      image: tictactoe,
      title: "TicTacToe Game",
      description: "Basic Tic Tac Toe game, created in C# and WPF",
      stack: "WPF and C#",
      demo: "#home",
      code: "https://github.com/SergiuBogdan/Simple-TicTacToeGame",
    },
  ];

  const style = {
    transform: `translateX(-${
      activeIndex *
      `${
        window.innerWidth <= 425
          ? 330
          : window.innerWidth <= 768
          ? 340
          : window.innerWidth <= 1024
          ? 468
          : window.innerWidth >= 1440 && 470
      }`
    }px)`,
  };

  return (
    <section
      id="projects"
      className="my-32 bg-gradient-to-tr from-cyan-800 to-slate-950 pt-10 "
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="uppercase text-3xl tracking-tighter font-light text-center mb-10 text-stone-50"
      >
        Projects
      </motion.h2>
      <div className="flex items-start justify-end flex-wrap p-2 text-stone-50 pb-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2 h-[642px] px-2 md:px-10 flex items-center justify-end order-2 md:order-1"
        >
          <div className="w-full xl:w-1/2 ms-auto min-h-[400px]">
            <h3 className="text-right text-2xl tracking-tighter mb-6">
              {slides[activeIndex].title}
            </h3>
            <div className="min-h-32">
              <p className="text-right text-sm">
                {slides[activeIndex].description}
              </p>
            </div>
            <div className="min-h-20 my-6">
              <p className="text-right text-lg tracking-tighter">Tech used</p>
              <p className="text-right text-cyan-500 font-bold tracking-tighter">
                {slides[activeIndex].stack}
              </p>
            </div>
            <div className="text-right">
              <a
                href={slides[activeIndex].demo}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 text-stone-50 rounded-md py-2 px-4 text-sm hover:bg-cyan-600 transition-all duration-150 mr-4"
              >
                Live Demo Comming Soon !
              </a>
              <a
                href={slides[activeIndex].code}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-950 text-stone-50 rounded-md py-2 px-4 text-sm hover:bg-slate-900 transition-all duration-150"
              >
                Source Code
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2 order-1 md:order-2"
        >
          <div className="p-4 flex overflow-hidden h-[580px] items-center">
            {slides.map((slide) => (
              <div
                style={style}
                className="flex items-center justify-center min-w-[330px] md:min-w-[340px] lg:min-w-[468px] xl:min-w-[470] h-[460px] p-6 transition-all duration-500 ease-in-out"
                key={slide.id}
              >
                <div
                  className={`w-full h-full transition-all duration-500 py-4 rounded-2xl relative shadow-md shadow-cyan-950 bg-transparent ${
                    activeIndex === slide.id - 1 &&
                    "scale-110 -translate-y-[20px]"
                  }`}
                >
                  <div>
                    <img
                      src={slide.image}
                      alt="project"
                      className="relative z-10"
                    />

                    <img
                      src={abstractLines}
                      alt="abstract"
                      className="absolute bottom-0 left-0 rounded-2xl opacity-90"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={prevIndexHandler}
              disabled={activeIndex === 0}
              className="disabled:opacity-0 disabled:pointer-events-none bg-cyan-400/50 rounded-full p-4 mr-4"
            >
              <BsChevronLeft className="text-3xl" />
            </button>
            <button
              onClick={nextIndexHandler}
              disabled={activeIndex === 5}
              className="disabled:opacity-0 disabled:pointer-events-none bg-cyan-400/50 rounded-full p-4 ml-4"
            >
              <BsChevronRight className="text-3xl" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
