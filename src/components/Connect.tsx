import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../Reveal.tsx";
import { Mail, Linkedin, MapPin, Phone, Facebook } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";

const Connect: React.FC = () => {
  return (
    <section
      id="connect"
      className="relative bg-violet-blush py-2 overflow-hidden"
    >
      <div className="section">
        <div className="mb-12 text-center">
          <Reveal direction="up">
            <motion.h2
              className="text-4xl md:text-5xl font-serif text-center mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Connect with me
            </motion.h2>
          </Reveal>
          <motion.div
            className="h-2 w-24 bg-pink-accent mx-auto rounded-full mb-1"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        {/* Connecting Grid */}

        {/* Skills Grid */}
        <div className="grid-center grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Reveal direction="right" delay={0.4}>
            <div className="grid grid-cols-3 gap-6">
              <ContactItem
                icon={<Phone size={24} />}
                title="Call me "
                content="71531692"
              />
              <ContactItem
                icon={<Mail size={24} />}
                title="Email"
                content="farikamagjabeen2022@gmail.com"
                href="farikamagjabeen2022@gmail.com"
              />

              <ContactItem
                icon={<LiaLinkedin size={24} />}
                title="LinkedIn"
                content="Connect with me"
                href="https://www.linkedin.com/in/farika-magjabeen-mohamed-farook-7b57b0311/"
              />

              <ContactItem
                icon={<FaGithub size={24} />}
                title="Github"
                content="Connect with me"
                href="https://github.com/Farika2022"
              />
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
const ContactItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}> = ({ icon, title, content, href }) => {
  return (
    <a
      href={href}
      className="flex items-center p-4 bg-gradient-to-r from-violet-600 to-pink-700 rounded-lg hover:bg-neutral-700 transition-colors group"
      target="_blank"
    >
      <div className="p-3 bg-violet-rouge rounded-lg text-white mr-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg text-white">{title}</h4>
        <p className="text-neutral-100">{content}</p>
      </div>
    </a>
  );
};

export default Connect;
