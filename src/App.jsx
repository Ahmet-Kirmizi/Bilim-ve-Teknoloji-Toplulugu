import styles from "./style";
import {Business , Footer, Navbar } from "./components";
import UlasimdaYapayZeka from "./components/ulasimdaYapayZeka.jsx"
import Projects from "./components/Projects.jsx";
import style from "./style";
import HomeTab from "./components/homeTab.jsx";
import Intro from "./components/intro.jsx";
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Intro />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
          <HomeTab></HomeTab>
          <Projects/>
        <Footer />
      </div>
    </div>
  </div>

);

export default App;

