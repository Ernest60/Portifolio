"use client";
import Image from "next/image";
import photo2 from "../assets/photo2.jpg";
import style, { layout } from "../app/style";
import { motion } from "framer-motion";

const Abaut = () => {
  return (
    <section
      id="abaut"
      className={`${style.paddingY} flex flex-col  relative backdrop:blur-xl  bg-gradient-to-r from-[#000b1d] to-[#0a1226]`}
    >
      {" "}
      {/*Floating Particles Bg */}
      <div className=" absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <h2 className="text-white">Hello World</h2>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className=" relative flex flex-col items-center py-3"
        >
          <h1 className={`${style.heading}`}>Abaut Me</h1>
        </motion.div>

        <div className={`${layout.sectionReverse}flex mx-10 gap-8 md:gap-0`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className=" flex justify-center h-[300px] min-w-[350px] relative "
          >
            <Image
              src={photo2}
              alt="img"
              className={`flex w-[380px] h-[310px]  items-center rounded-3xl m-2 md:w-[220px] md:h-[380px] lg:w-[320px]`}
            />
          </motion.div>

          <div className="min-w-[550px] flex flex-col gap-8">
            <div className={`${style.marginX} text-dimWhite  text-lg  `}>
              <p className={`${style.paragraph} mb-1 `}>
                Ernesto Mandlate is a skilled Front-End Developer based in
                Maputo, Mozambique, with a strong background in web development
                and a flair for design. He is dedicated to crafting
                user-friendly and visually captivating web experiences that meet
                modern standards of functionality and aesthetics.
              </p>

              <p className={`${style.paragraph}`}>
                His's portfolio showcases, his ability to turn ideas into
                impactful digital solutions. For inquiries or collaboration
                opportunities, feel free to reach out—he is always eager to
                create innovative and meaningful web experiences.
              </p>
            </div>

            <div className={`${style.marginX} flex flex-col gap-2`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative flex gap-6 items-center transition:0.3s text-dimWhite"
              >
                <p className={`${style.paragraph} min-w-[120px]`}>
                  HTML & CSS{" "}
                </p>{" "}
                <hr
                  className="outline-none border-none w-[50%] h-2  rounded-lg bg-gradient-to-r from-purple-500 to-red-500"
                  style={{ width: "80%" }}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative flex gap-6 items-center transition:0.3s text-dimWhite"
              >
                <p className={`${style.paragraph} min-w-[120px]`}>
                  JavaScript{" "}
                </p>{" "}
                <hr
                  className="outline-none border-none w-[50%] h-2  rounded-lg bg-gradient-to-r from-purple-500 to-red-500 "
                  style={{ width: "50%" }}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative flex gap-6 items-center transition:0.3s text-dimWhite"
              >
                <p className={`${style.paragraph} min-w-[120px]`}>React Js </p>{" "}
                <hr
                  className="outline-none border-none w-[50%] h-2  rounded-lg bg-gradient-to-r from-purple-500 to-red-500 "
                  style={{ width: "70%" }}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative flex gap-6 items-center transition:0.3s text-dimWhite"
              >
                <p className={`${style.paragraph} min-w-[120px]`}>Next Js </p>{" "}
                <hr
                  className="outline-none border-none w-[50%] h-2  rounded-lg bg-gradient-to-r from-purple-500 to-red-500"
                  style={{ width: "60%" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abaut;
