"use client";

import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FaDownload } from "react-icons/fa";

import { useState, useEffect } from "react";

const HeroText = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-4xl mb-5 md:text-5xl font-bold tracking-wide ">
          Hello, I&apos;m{" "}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.7,
            }}
            className="text-blue-600 inline-block"
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
        <Link href="#" aria-label="LinkedIn" className="group">
          <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-600">
            <FaLinkedin className="w-6 h-6 fill-current" />
          </span>
        </Link>

        <Link href="#" aria-label="GitHub" className="group">
          <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-600">
            <FaGithub className="w-6 h-6 fill-current" />
          </span>
        </Link>

        <Link href="#" aria-label="Telegram" className="group">
          <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-600">
            <FaTelegram className="w-6 h-6 fill-current" />
          </span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2"
      >
        <a
          href="/Ali_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 w-full sm:w-auto text-white text-center px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <FaDownload /> Download CV
        </a>

        <Link
          href="/contact"
          className=" flex items-center gap-2 bg-gray-500 dark:text-gray-300 w-full sm:w-auto text-white text-center px-4 py-2 rounded-md hover:bg-gray-600"
        >
          <FaEnvelope />
          Contact Me
        </Link>
      </motion.div>
      {showArrow && (
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-300"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ChevronDown size={50} />
        </motion.div>
      )}
    </div>
  );
};

export default HeroText;
