"use client";
import styles from "../app/styles";
import { photo } from "../assets";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";
import { motion } from "motion/react";

const Hero = () => (
  
  <section
    id="home"
    className={`${(styles.paddingY, styles.paddingX)} flex flex-row md:items-center sm:justify-center md:justify-center`}
  >
    <div
      className={`${styles.flexStart} flex-col lg:px-0 sm:px-16  px-4 gap-4 h-[700px] `}
    >
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center mb-12 "
        >
          <h1 className="text-dimWhite  lg:text-6xl font-serif text-[30px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-700">
              {" "}
              Hello, I'm{" "}
            </span>

            <br />

            <TypeAnimation
              sequence={["Ernesto", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </h1>
        </motion.div>

        <div>
          <p className={`${styles.paragraph} max-w-[470px]`}>
            Specialising in React.js and Next.js, creating modern websites and
            apps with effective digital experiences, helping companies and
            individuals to establish a solid and functional online presence.
          </p>
        </div>
      </div>

      <Button />
    </div>

    <motion.div
      animate={{ y: [0, -30, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`flex-1 flex ${styles.flexCenter} pt-16 md:my-0 relative hidden  md:hidden lg:block`}
    >
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my relative`}>
        <Image
          src={photo}
          alt="photo"
          className="w-[450px] h-[500px] relative rounded-b-3xl"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative bottom-24 left-28">
        <div className="text-xl font-roboto text-content">
          <h3>
            Based in
            <span className="block bg-primary  bg-clip-text text-transparent font-serif">
              Mozambique / Maputo
            </span>
          </h3>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
