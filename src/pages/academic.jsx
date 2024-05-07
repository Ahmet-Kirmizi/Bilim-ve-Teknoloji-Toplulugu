import {Footer, Navbar} from "../components/index.js";
import styles from "../style.js";
import React from "react";
import Intro from "../components/intro.jsx";
import YoutubeEmbed from "../components/iframe.jsx";
import {videoData} from "../constants/index.js";

const academic = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar/>
                    <div className={`m-4 grid lg:grid-cols-2 gap-4 sm:grid-cols-1`}>
                        {
                            videoData.map((video, index) => (
                                <YoutubeEmbed key={index} embedId={video.embedId} title={video.title}/>
                            ))
                        }

                    </div>

                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                </div>
            </div>
            <div className={`${styles.paddingY} ${styles.paddingX} `}>
                <Footer/>
            </div>

        </div>
    )
}

export default academic;