import styles from "../app/styles";

import {
  Navbar,
  Hero,
  Footer,
  Abaut,
  Projects,
  Skills,
  Contact,
} from "../components";

const page = () => (
  <div className="w-full overflow-hidden">
    <div
      className={`fixed w-full z-50 bg-gray-950 ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        {" "}
        <Navbar />
      </div>
    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Abaut />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>

    <div className={`bg-gray-950 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default page;
