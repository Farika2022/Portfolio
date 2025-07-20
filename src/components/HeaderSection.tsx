import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-pink-blush shadow-xl py-2 backdrop-blur-md"
          : "bg-violet-blush bg-opacity-90 backdrop-blur-md py-2"
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-3xl font-italic font-bold text-violet-accent"
        >
          Farika Farook
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <HeaderLink href="#about">Who am I</HeaderLink>
          <HeaderLink href="#skills">My Skills</HeaderLink>
          <HeaderLink href="#works">My Works</HeaderLink>
          <HeaderLink href="#connect">Connect</HeaderLink>

          <a href="#connect" className="btn btn-primary">
            Contact me
          </a>
        </div>

        <button
          className="md:hidden text-pink-accent p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}

      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-neutral-200 shadow-xl backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 p-6">
            <MobileHeaderLink
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
              Who am I
            </MobileHeaderLink>
            <MobileHeaderLink
              href="#skill"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Skill
            </MobileHeaderLink>
            <MobileHeaderLink
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Work
            </MobileHeaderLink>

            <MobileHeaderLink
              href="#connect"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connect
            </MobileHeaderLink>
            <a
              href="#connect"
              className="btn btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact me
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

const HeaderLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="font-semibold text-lg text-neutral-800 hover:text-violet-accent transition-colors"
  >
    {children}
  </a>
);

const MobileHeaderLink: React.FC<{
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}> = ({ href, children, onClick }) => (
  <a
    href={href}
    className="py-3 text-center font-semibold text-lg text-neutral-800 hover:text-pink-accent transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);
export default Header;
