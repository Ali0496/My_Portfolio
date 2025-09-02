"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "@/lib/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin only the heading when it reaches the top
      gsap.fromTo(
        ".projects-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center", // when Projects top hits middle of screen
            end: "top top", // until Projects top hits viewport top
            scrub: true,
          },
        }
      );
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", // now container has reached top
          end: "+=1500",
          scrub: true,
          pin: true,
        },
        defaults: { duration: 1.5, ease: "power3.out" },
      });

      // directions for the 6 cards
      const directions = [
        { x: -250, y: -250 }, // top-left
        { x: 0, y: -300 }, // top
        { x: 250, y: -250 }, // top-right
        { x: -250, y: -250 }, // top-left
        { x: 0, y: -300 }, // top
        { x: 250, y: -250 }, // left
      ];

      // Animate cards after heading
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const { x, y } = directions[i % directions.length];

        tl.fromTo(card, { opacity: 0, x, y }, { opacity: 1, x: 0, y: 0 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-10 md:py-15 max-w-7xl mx-auto" ref={containerRef}>
      <h2 className="projects-heading text-2xl font-bold text-center mb-10 sticky top-20">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
        {projects.slice(0, 6).map((project, index) => (
          <article
            key={project.title}
            ref={(el) => {
              cardsRef.current[index] = el as HTMLDivElement | null;
            }}
            className="bg-white dark:bg-gray-800/80 p-4 border rounded-lg shadow-md will-change-transform"
          >
            <div className="rounded-lg relative aspect-video mb-4 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                priority={index < 2}
              />
            </div>

            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

            <p className="text-gray-600 text-sm dark:text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-1 max-h-10">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-blue-600 bg-gray-200 dark:bg-gray-700 rounded-full px-1.5 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-2 flex gap-4">
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center text-gray-600 dark:text-gray-200 gap-2 hover:text-blue-500 dark:hover:text-blue-500"
              >
                <FaGithub className="inline-block" />
                <span>Code</span>
              </Link>
              <Link
                href={project.demoLink}
                target="_blank"
                className="flex items-center text-gray-600 dark:text-gray-200 gap-2 hover:text-blue-500 dark:hover:text-blue-500"
              >
                <FaExternalLinkAlt className="inline-block" />
                <span>Live Demo</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
