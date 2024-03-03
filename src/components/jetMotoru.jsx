import {jetMotoru} from "../constants";
import styles from "../style";
import CrewCard from "./crewCard.jsx";

const JetMotoru = () => (
  <section id="crew" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {jetMotoru.map((card) => <CrewCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default JetMotoru;
