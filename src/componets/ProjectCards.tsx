"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import style from "@/app/style";
import { react, next, ts, tailwind, arrowUp } from "@/assets";
import Link from "next/link";

const ProjectCards = ({ description, title, img, on }) => (
  <section className="flex py-2 md:px-2 lg:px-2">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -20, transition: { duration: 0.2 } }}
      className="flex justify-between flex-col h-[380px] w-[250px] bg-[#1a1a1a] overflow-hidden border-white/10 rounded-3xl lg:h-[400px] lg:w-[300px]"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="h-[250px] relative"
      >
        <Image src={img} alt="name" className="h-[150px] w-full" />
      </motion.div>

      <motion.div className="flex flex-col rounded-xl gap-2 py-10">
        <div className="mx-4">
          {" "}
          <h3 className="font-title text-[15px] font-bold text-dimWhite mb-2">
            {title}
          </h3>
          <p className={`font-paragraph text-sm text-dimWhite mb-2 `}>
            {description}
          </p>
        </div>

        <div className="flex gap-4 mx-4">
          <Image
            src={react}
            alt="react"
            className="px-2 py-1 w-14 h-8 rounded-3xl bg-white/5 text-content text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5"
          />
          <Image
            src={next}
            alt="next"
            className="px-2 py-1 w-14 h-8 rounded-3xl bg-white/5 text-content text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5"
          />
          <Image
            src={ts}
            alt="react"
            className="px-2 py-1 w-14 h-8 rounded-3xl bg-white/5 text-content text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5"
          />
          <Image
            src={tailwind}
            alt="next"
            className="px-2 py-1 w-14 h-8 rounded-3xl bg-white/5 text-content text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5"
          />
        </div>

        <div className="mx-4 py-3">
          <Link
            href={on}
            target={"_blank"}
            className="flex gap-16 font-serif  text-sm text-dimWhite"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="h-[150px] relative flex flex-row gap-8"
            >
              {on}
              <div>
                <Image src={arrowUp} alt="arrowup" />
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default ProjectCards;
