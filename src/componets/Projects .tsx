"use client";
import { projectDate } from "../constants";
import style from "../app/style";
import ProjectCards from "./ProjectCards";
import { motion } from "framer-motion";

const Projects = () => (
  <section
    id="projects"
    className={`${style.paddingY} ${style.flexCenter} flex-col relative`}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="flex flex-col items-center mb-12"
    >
      <h1 className={`${style.heading}`}>Projects</h1>
    </motion.div>

    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="flex flex-wrap justify-center w-full relative z-[1]"
    >
      {projectDate.map((card) => (
        <ProjectCards key={card.id} {...card}/>
      ))}
    </div>
  </section>
);

export default Projects;
