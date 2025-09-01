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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 7%", // when container top hits 70% of viewport
          end: "+=1000", // extend the scroll space by 1000px
          scrub: true,
          pin: true, // keeps container fixed while animating
          markers: true, // debug
        },
        defaults: { duration: 1.5, ease: "power3.out" },
      });

      // Animate heading first (move from top into center, fade in)
      tl.fromTo(
        ".projects-heading",
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0 },
        0 // start immediately
      );

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
      <h2 className="projects-heading text-2xl font-bold text-center mb-10">
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
        nesciunt, recusandae est asperiores non nemo aspernatur eum quo dolorum
        eius sunt hic quos sint voluptatem veritatis assumenda quae nihil
        voluptates voluptas consectetur amet qui praesentium sit. Corporis
        officiis, recusandae aut excepturi libero labore vel ipsam id in quis
        veritatis qui quibusdam, atque sunt porro corrupti est modi aliquam fuga
        voluptate dolorem. Voluptatibus saepe possimus temporibus animi expedita
        voluptatem voluptas magnam dolores. Minima quis tempora, sapiente
        perspiciatis repellendus esse. Ipsam mollitia ratione itaque. Aperiam
        deserunt voluptatum nostrum aut autem obcaecati ullam explicabo totam
        repellat enim! Aut, aliquid quae. Nulla architecto possimus earum magnam
        modi fugiat quidem repudiandae inventore. Quod, molestias consectetur
        ullam sequi iure aspernatur, doloremque quibusdam minus doloribus
        laborum officiis magni asperiores eius facere, corrupti nobis sint natus
        cum? Pariatur ullam ex fuga quas suscipit beatae dolores, esse, magni
        deleniti voluptatum accusamus, neque odit sapiente maxime distinctio
        obcaecati nihil! Pariatur aperiam quia nulla dolorum architecto minima
        repudiandae cum consequatur et expedita amet eveniet neque quas dolor
        eaque, dignissimos sit accusamus laudantium! Eius hic libero enim odio
        tenetur adipisci optio alias corporis totam fuga, qui voluptate amet
        possimus minima omnis maxime velit temporibus, quo exercitationem
        impedit. In at modi reiciendis, cupiditate sit fugit nisi adipisci
        provident nobis libero dolore, ducimus voluptatem voluptas deserunt hic
        reprehenderit doloribus impedit labore soluta ipsam recusandae error
        dignissimos? Vitae, nulla tempora? Doloribus labore recusandae, quis
        earum necessitatibus repudiandae rerum, consequatur deserunt repellat
        laudantium unde, iure beatae. Fugiat voluptate molestiae laboriosam
        quidem. Quasi at similique, veniam eum laboriosam commodi veritatis eos
        odio unde corrupti asperiores ea soluta autem nulla dolorem ipsum ad
        ullam in illo. Mollitia nemo eligendi beatae accusantium unde facilis
        dicta quasi, amet odit deleniti quos. Quidem, dolor! Quos mollitia
        architecto quis perferendis minima eveniet eligendi, quia explicabo
        sapiente cum, rem numquam! Quibusdam, obcaecati ipsum?
      </p>
    </section>
  );
};

export default Projects;
