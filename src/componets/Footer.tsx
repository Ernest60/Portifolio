import style from "../app/style";

const Footer = () => {
  return (
    <section id="footer" className={` ${style.paddingY}`}>
      <div className="flex w-full items-center border-t-[1px] border-t-[#3f3e45]">
        <p className="font-sans text-center text-[10px]  text-dimWhite">
          Copyright &#169; 2025 Ernesto & All Rigghts Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
