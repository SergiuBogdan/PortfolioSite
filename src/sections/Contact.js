import { motion } from "framer-motion";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { MdEmail, MdLocalPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="mb-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="uppercase text-lg tracking-tighter font-light text-center mb-10"
      >
        Contact
      </motion.h2>
      <div className="flex items-center flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2 p-10 text-right"
        >
          <p className="tracking-tighter text-xl">
            You can find me on social media!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2 p-10 text-left"
        >
          <p className="flex items-center">
            <MdEmail className="mr-1" /> email:{" "}
            <a
              className="text-cyan-800 underline"
              href="mailto:sergiu.bogdan09@yahoo.com"
            >
              sergiu.bogdan09@yahoo.com
            </a>
          </p>
          <p className="flex items-center">
            <MdLocalPhone className="mr-1" /> phone: 0741 339 534
          </p>
          <div className="flex mt-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/catana-sergiu-bogdan/"
            >
              <BsLinkedin className="text-xl mr-4 text-cyan-800 hover:text-cyan-950 cursor-pointer" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="hhttps://github.com/SergiuBogdan/"
            >
              <BsGithub className="text-xl mr-4 text-cyan-800 hover:text-cyan-950 cursor-pointer" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/catana.s1.bogdan"
            >
              <BsFacebook className="text-xl mr-4 text-cyan-800 hover:text-cyan-950 cursor-pointer" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
