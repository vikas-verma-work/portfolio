"use client";
import { motion } from "motion/react";
import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-50">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/vikas-verma-work"
          fgColor="gray"
          bgColor="transparent"
          className="social-icon cursor-pointer"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/vikas-verma-6a6995388/"
          fgColor="gray"
          bgColor="transparent"
          className="social-icon cursor-pointer"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
        url="mailto:vikas.verma.work@outlook.com"
          className="social-icon cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercae hidden md:inline-flex text-sm text-gray-400 hover:text-white">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
