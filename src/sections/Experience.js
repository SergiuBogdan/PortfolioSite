import toque from "../assets/images/toque.png";
import instructor from "../assets/images/instructor.png";
import cogs from "../assets/images/cogs.png";
import umfst from "../assets/images/umfst.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux, SiTailwindcss, SiDotnet } from "react-icons/si";

import { motion } from "framer-motion";

const Experience = () => {
  const frontendSkills = [
    { id: "1", icon: <FaHtml5 />, skill: "HTML5", color: "#e34c26" },
    { id: "2", icon: <FaCss3Alt />, skill: "CSS3", color: "#264de4" },
    { id: "3", icon: <SiJavascript />, skill: "JavaScript", color: "#f0db4f" },
    {
      id: "4",
      icon: <SiTailwindcss />,
      skill: "TailwindCSS",
      color: "#38bdf8",
    },
    { id: "5", icon: <FaReact />, skill: "React", color: "#38bdf8" },
    { id: "6", icon: <SiRedux />, skill: "Redux", color: "#764abc" },
  ];

  const backendSkills = [
    { id: "1", icon: <SiDotnet />, skill: ".NET", color: "#38bdf8" },
  ];

  return (
    <section id="experience" className="mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="uppercase text-3xl tracking-tighter font-light text-center mb-10"
      >
        Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-start justify-evenly flex-wrap"
      >
        <div className="w-full md:w-80 lg:w-96 py-4 px-6">
          <div className="border border-stone-200 shadow shadow-stone-200 rounded-2xl p-4">
            <div className="h-64 p-10 relative">
              <div className="z-10">
                <img src={toque} alt="toque" className="relative z-10" />
              </div>
              <img src={img1} alt="color" className="absolute top-10 left-0" />
            </div>
            <div className="h-16">
              <h3 className="text-center text-lg font-bold text-cyan-800">
                Azimut Vision S.R.L
              </h3>
            </div>
            <div className="text-center text-sm md:h-32">
              <p>- 100 hours of live teaching with experienced mentors</p>
              <p>- weekly chalenges and home work</p>
              <p>- certificate of completion, diploma</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-80 lg:w-96 py-4 px-6">
          <div className="border border-stone-200 shadow shadow-stone-200 rounded-2xl p-4">
            <div className="h-64 p-10 relative">
              <div className="z-10">
                <img src={umfst} alt="toque" className="relative z-10" />
              </div>
              <img src={img4} alt="color" className="absolute top-10 left-0" />
            </div>
            <div className="h-16">
              <h3 className="text-center text-lg font-bold text-cyan-800">
                UMFST G.E. Palade Târgu Mureș
              </h3>
            </div>
            <div className="text-center text-sm md:h-32">
              <p>- several projects within the university</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-80 lg:w-96 py-4 px-6">
          <div className="border border-stone-200 shadow shadow-stone-200 rounded-2xl p-4">
            <div className="h-64 p-10 relative">
              <img
                src={instructor}
                alt="instructor"
                className="relative z-10"
              />
              <img src={img2} alt="color" className="absolute top-10 left-0" />
            </div>
            <div className="h-16">
              <h3 className="text-center text-lg font-bold text-cyan-800">
                Udemy Courses
              </h3>
            </div>
            <div className="text-center text-sm md:h-32">
              <p>- 2 years of learning</p>
              <p>- learned from almost zero experience to intermediate level</p>
              <p>- a strong desire to learn</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-80 lg:w-96 py-4 px-6">
          <div className="border border-stone-200 shadow shadow-stone-200 rounded-2xl p-4">
            <div className="h-64 p-10 relative">
              <img src={cogs} alt="cogs" className="relative z-10" />
              <img src={img3} alt="color" className="absolute top-10 left-0" />
            </div>
            <div className="h-16">
              <h3 className="text-center text-lg font-bold text-cyan-800">
                Different interactions with experienced mentors
              </h3>
            </div>
            <div className="text-center text-sm md:h-32">
              <p>- coding chalenges</p>
              <p>- many sources of information and inspiration</p>
              <p>- developed the ability to find what I need quickly</p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="border-stone-200 px-6 lg:px-32 xl:px-72">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase text-3xl tracking-tighter font-light text-center mt-32 mb-10"
        >
          Tech used
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-between"
        >
          <div className="w-full md:w-[48%] lg:w-[49%]">
            <h3 className="font-bold tracking-tighter mb-4 text-center text-cyan-800 uppercase">
              Frontend
            </h3>
            <div className="flex flex-wrap justify-center">
              {frontendSkills.map(({ id, icon, skill, color }) => (
                <div key={id} className="w-1/3 p-0.5 lg:p-2">
                  <div className="border border-stone-200 rounded-md p-2 flex flex-col items-center justify-between cursor-pointer hover:shadow-md transition-all duration-200">
                    <span
                      className="text-5xl mb-2"
                      style={{ color: `${color}` }}
                    >
                      {icon}
                    </span>
                    <span className="text-xs">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[48%] lg:w-[49%] mt-10 md:mt-0">
            <h3 className="font-bold tracking-tighter mb-4 text-center uppercase text-cyan-800">
              Backend
            </h3>
            <div className="flex flex-wrap justify-center">
              {backendSkills.map(({ id, icon, skill, color }) => (
                <div key={id} className="w-1/3 p-0.5 lg:p-2">
                  <div className="border border-stone-200 rounded-md p-2 flex flex-col items-center justify-between cursor-pointer hover:shadow-md transition-all duration-200">
                    <span
                      className="text-5xl mb-2"
                      style={{ color: `${color}` }}
                    >
                      {icon}
                    </span>
                    <span className="text-xs">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
