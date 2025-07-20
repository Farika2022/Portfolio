import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.png";
import { Reveal } from "../Reveal.tsx";
const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-violet-blush py-2 overflow-hidden"
    >
      <div className="section mx-auto max-w-5xl px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-center mb-4 text-neutral-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Who Am I
        </motion.h2>
        <motion.div
          className="h-2 w-24 bg-pink-accent mx-auto rounded-full mb-8"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <motion.div
          className="relative z-10 max-w-2xl ml-0 mr-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl mb-8 text-neutral-900 text-left leading-relaxed">
            Hi,
            <p className="italic text-xl mb-8 text-neutral-900 text-left leading-relaxed">
              <strong className="italic text-xl">I'm Farika,</strong>
            </p>{" "}
            Computer Science student in Aalborg University. Currently I'm in my
            2nd year. I keen to work on <strong>Coding </strong> especially in
            the front-end part. I learned so many thing beyond technical skill.
            Particularly, I'm a person who is flexible with{" "}
            <strong className="italic text-xl">
              problem solving, team work
            </strong>{" "}
            and <strong>handle challenging tasks </strong>
            and <strong>self-learner.</strong>
          </p>
        </motion.div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-auto"
        viewBox="0 10 800 188"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f0d527fd"
          d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,128C672,149,768,203,864,202.7C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
        />
      </svg>
      <motion.img
        src={about}
        alt="Fariha"
        className="absolute top-28 right-20 rounded-full w-80 h-80 object-cover shadow-lg ring-8 ring-black"
        initial={{ opacity: 0, x: 90 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      />
    </section>
  );
};

export default About;
