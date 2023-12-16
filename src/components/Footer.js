import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-t-stone-200"
    >
      <div className="container mx-auto p-2 flex items-center justify-center">
        <p className="text-sm">Sergiu &copy; 2022 | All rights reserved</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
