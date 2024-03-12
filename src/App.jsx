import styles from "./style";
import {Business , Footer, Navbar } from "./components";
import Projects from "./components/Projects.jsx";
import HomeTab from "./components/homeTab.jsx";
import Intro from "./components/intro.jsx";
import JoinUsForm from "./components/joinUsForm.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import Ekiplerimiz from "./components/homeTab.jsx";
import YoutubeEmbed from "./components/iframe.jsx";
import AnimatedCursor from "react-animated-cursor";
import SimpleMap from "./components/ourLocation.jsx";
import PrivacyPolicy from "./components/privacyPolicy.jsx";

const App = () => (

        <div className="bg-primary w-full overflow-hidden ">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar/>
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Intro/>
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Business/>
                    <Ekiplerimiz></Ekiplerimiz>
                    {/*<YoutubeEmbed embedId={"Q1SiXEafFXE"}></YoutubeEmbed>*/}
                    <JoinUsForm/>
                    {/*<SimpleMap/>*/}
                    <PrivacyPolicy></PrivacyPolicy>
                    <Footer/>
                </div>
            </div>
        </div>

)
export default App;

