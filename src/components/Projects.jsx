import styles from "../style";
import CrewCard from "./crewCard.jsx";

const Projects = () => (
    <section id="projects" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={styles.heading2}>
                Projelerimiz <br className="sm:block hidden" />
            </h2>
            <div className="w-full md:mt-0 mt-6">
            </div>
        </div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[30px] text-white ss:leading-[100.8px] leading-[75px]">
            Gelişim  <span className="text-gradient">Aşamasında</span>
        </h1>

    </section>
);

export default Projects;
