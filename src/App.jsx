import styles from "./style";
import {Business , Footer, Navbar } from "./components";
import Projects from "./components/Projects.jsx";
import HomeTab from "./components/homeTab.jsx";
import Intro from "./components/intro.jsx";
import JoinUsForm from "./components/joinUsForm.jsx";
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (

        <div className="bg-primary w-full overflow-hidden">
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
                    <HomeTab></HomeTab>
                    <Projects/>
                    <JoinUsForm/>
                    <Footer/>
                </div>
            </div>
        </div>

)
export default App;

