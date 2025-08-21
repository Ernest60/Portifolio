import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <div className="flex flex-col mb-3 md:flex-col lg:flex-row  gap-4">
      <a
        href="#form"
        id="skills"
        className=" w-full font-paragraph text-center text-lg font-medium px-14 py-3 rounded-xl bg-gradient-to-r from-blue-700 via-purple-500 to-red-700 text-dimWhite lg:w-[280px]"
      >
        Connect with me
      </a>

      <Link
        href="/Cv-ernesto.pdf"
        target={"_blank"}
        className=" w-full font-paragraph text-center text-lg font-medium px-14 py-3 rounded-xl hover:bg-slate-800 border text-dimWhite lg:w-[280px]"
      >
        My resume
      </Link>
    </div>
  );
};

export default Button;
