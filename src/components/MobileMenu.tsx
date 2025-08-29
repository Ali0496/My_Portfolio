"use client";
import { AlignRight, X } from "lucide-react";
import React from "react";
import { navLinks } from "../../constants/data";
import Link from "next/link";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import Theme from "./Theme";

// MobileMenuPanel component
const MobileMenuPanel = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden w-full bg-white/95 text-gray-800 dark:bg-gray-800/95 dark:text-white z-50 border-b border-gray-700 absolute top-full left-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Container>
            <div className="py-4 flex flex-col items-start pl-4">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                {navLinks.map((item) => (
                  <motion.div
                    key={item.label}
                    className="mb-5"
                    variants={{
                      hidden: { opacity: 0, x: -50, scale: 0.9 },
                      visible: { opacity: 1, x: 0, scale: 1 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      duration: 0.4,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="dark:text-white hover:text-green-400 group hoverEffect text-lg font-medium py-2 relative"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                      <span className="absolute -bottom-0.5 left-1/2  w-0 h-0.5 bg-green-600 group-hover:w-1/2 hoverEffect group-hover:left-0" />
                      <span className="absolute -bottom-0.5 right-1/2  w-0 h-0.5 bg-green-600 group-hover:w-1/2 hoverEffect group-hover:right-0" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// MobileMenu component
const MobileMenu = () => {
  const [isMobileMenuOpen, setMobileMenuIsOpen] = React.useState(false);

  return (
    <div className="md:hidden flex items-center gap-2 ">
      <Theme />
      <button
        onClick={() => setMobileMenuIsOpen(!isMobileMenuOpen)}
        className="hover:text-gray-300 p-2 hoverEffect rounded-lg transition-colors"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{
            rotate: isMobileMenuOpen ? 90 : 0,
            scale: isMobileMenuOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
        </motion.div>
      </button>
      <MobileMenuPanel
        isOpen={isMobileMenuOpen}
        setIsOpen={setMobileMenuIsOpen}
      />
    </div>
  );
};

export default MobileMenu;
