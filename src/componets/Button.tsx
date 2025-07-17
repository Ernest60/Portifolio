import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <div className="flex flex-col md:flex-row  lg:flex-row pt-4 gap-4">
      <a
        href="#form"
        id="skills"
        className="font-serif text-center text-base font-medium px-14 py-3 w-[450px] md:w-fit lg:w-[350px] rounded-xl bg-gradient-to-r from-blue-700 via-purple-500 to-red-700 text-dimWhite"
      >
        Connect with me
      </a>

      <Link
        href="/Cv-ernesto.pdf"
        target={"_blank"}
        className="font-serif text-center text-base font-medium px-14 py-3 w-[450px] md:w-fit lg:w-[350px] rounded-xl hover:bg-slate-800 border text-dimWhite"
      >
        My resume
      </Link>
    </div>
  );
};

export default Button;
