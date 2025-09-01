"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroText = () => {
  return (
    <div>
      {/* Container for the main text, with a slight delay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center" // Centering for better mobile responsiveness
      >
        <h1 className="text-4xl mb-5 md:text-5xl font-bold tracking-wide">
          Hello, I&apos;m{" "}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.7,
            }} // Added a spring effect for a "pop" animation
            className="text-blue-600 inline-block" // `inline-block` fixes an issue with `scale` on `span`
          >
            Muhammadali
          </motion.span>
        </h1>
        <p className="mb-5 text-gray-700 dark:text-gray-400 md:text-xl font-semibold">
          I&apos;m a passionate developer with a knack for creating stunning web
          applications.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="flex justify-center space-x-4 mb-6"
      >
        <Link
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
          href="#"
        >
          <FaLinkedin />
        </Link>
        <Link
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
          href="#"
        >
          <FaGithub />
        </Link>
        <Link
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
          href="#"
        >
          <FaTelegram />
        </Link>
      </motion.div>{" "}
      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }} // Adjusted delay to follow the social icons
        className="flex flex-col sm:flex-row items-center justify-center gap-2" // Use `gap` instead of `space-x` for better spacing
      >
        <Link
          href="/projects"
          passHref
          className="bg-blue-600 w-full sm:w-auto text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          passHref
          className="bg-gray-700 w-full sm:w-auto text-white text-center px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
        >
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroText;
