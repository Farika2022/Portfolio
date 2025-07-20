import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/heroImg.png";
import heroImg1 from "../assets/heroImg1.png";

const HeroSection: React.FC = () => {
  return (
    <section className="gradient-bg pt-34 pb-4 md:py-12 relative ">
      <div className="section flex items-center justify-center relative z-10">
        <div className="relative w-1/2 h-[200px]">
          {/* Photo above wave */}

          <motion.img
            src={heroImg1}
            alt="Fariha"
            className="absolute bottom-10 right-75  transform -translate-y-1/2 rounded-full w-80 h-80 object-cover shadow-lg z-20 ring-4 ring-white"
            initial={{ opacity: 0, x: -90 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          />
          <motion.img
            src={heroImg}
            alt="Fariha"
            className="absolute top-10 left-1/2 transform -translate-x-1/2 rounded-full w-90 h-80 object-cover shadow-lg z-10 ring-4 ring-white"
            initial={{ opacity: 0, x: -90 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          />
        </div>

        <motion.div
          className="w-full max-w-3xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-20 tracking-tight text-white drop-shadow-lg">
            Farika Magjabeen Mohamed Farook
          </h1>

          <blockquote className="italic text-xl md:text-2xl text-white mb-10 font-serif font-medium drop-shadow-md bg-black bg-opacity-20 p-2 rounded-lg backdrop-blur-sm max-w-xl mx-auto">
            <h2 className="text-xl md:text-2xl text-white mb-8 font-medium drop-shadow-md">
              CS (IT) Student <br></br>"Front-end developer"
            </h2>
          </blockquote>
        </motion.div>

        <a
          href="#about"
          className="absolute btn btn-primary1 inline-block left-20 bottom-20 w-50 text-lg"
        >
          Know Me
        </a>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          className="absolute bottom-0 left-0 w-full h-auto"
          viewBox="00 0 1148 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            fill="#f8e045f1"
            d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,128C672,149,768,203,864,202.7C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
