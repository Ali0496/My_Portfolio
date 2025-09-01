"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="/images/Image.png"
        alt="Hero Image"
        width={100}
        height={100}
        className="rounded-full mb-1 md:mb-3 w-32 h-32 object-cover ring-2 ring-blue-700"
        priority
      />
    </motion.div>
  );
};

export default HeroImage;
