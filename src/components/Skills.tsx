import React from "react";
import { motion } from "framer-motion";
import skill from "../assets/skill.jpg";
import { Reveal } from "../Reveal.tsx"; // Make sure this component works
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaApple,
  FaAndroid,
  FaPhp,
  FaPython,
  FaGit,
} from "react-icons/fa";
import { SiAngular, SiTypescript, SiJavascript } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={24} />, label: "HTML", bg: "bg-teal-300" },
  { icon: <FaCss3Alt size={24} />, label: "CSS", bg: "bg-yellow-400" },
  { icon: <FaReact size={24} />, label: "React JS", bg: "bg-orange-200" },
  { icon: <SiAngular size={24} />, label: "Angular", bg: "bg-blue-300" },
  { icon: <SiTypescript size={24} />, label: "TypeScript", bg: "bg-green-300" },
  {
    icon: <SiJavascript size={24} />,
    label: "JavaScript",
    bg: "bg-purple-300",
  },
  { icon: <FaPython size={24} />, label: "Python", bg: "bg-purple-300" },
  { icon: <FaPhp size={24} />, label: "PHP", bg: "bg-lime-300" },
  { icon: <FaGit size={24} />, label: "Git", bg: "bg-red-300" },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-violet-100 py-12 overflow-hidden"
    >
      <div className="section px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <Reveal direction="up">
            <motion.h2
              className="text-4xl md:text-5xl font-serif text-center mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Skills
            </motion.h2>
          </Reveal>

          <motion.img
            src={skill}
            alt="Fariha"
            className="absolute top-28 left-20 w-60 h-80 object-cover shadow-lg ring-8 ring-black"
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />

          <motion.div
            className="h-2 w-24 bg-pink-500 mx-auto rounded-full mb-1"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>

        {/* Quote Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <Reveal direction="left" delay={0.2}>
            <motion.blockquote
              className="text-2xl font-serif italic text-center text-neutral-900 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              “Web design is not just about creating pretty layouts. It’s about
              understanding the marketing challenge behind your business.” –
              <strong> Mohamed Saad</strong>
            </motion.blockquote>

            <motion.p
              className="text-xl text-center text-neutral-700 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Technical skills I learned.
            </motion.p>
          </Reveal>
        </div>

        {/* Skills Grid */}
        <div className="grid-center grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Reveal direction="right" delay={0.4}>
            <div className="grid grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 p-4 rounded shadow-md hover:scale-105 transition-transform duration-300 ${skill.bg}`}
                >
                  <div className="text-black">{skill.icon}</div>
                  <span className="text-black font-medium">{skill.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Bottom Wave SVG */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg
            className="absolute bottom-0 left-0 w-full h-auto scale-x-[-1]"
            viewBox="0 10 800 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f0d527fd"
              d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,128C672,149,768,203,864,202.7C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
