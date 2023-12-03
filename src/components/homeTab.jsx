import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Crew from "./Crew.jsx";
import styles from "../style.js";
const homeTab = () => (
    <section>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={styles.heading2}>
                Ekiplerimiz <br className="sm:block hidden" />
            </h2>
            <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                    Bir ekip, farklı yeteneklerin birleşimiyle sadece işleri değil, aynı zamanda hayalleri de gerçeğe dönüştürür.
                </p>
            </div>
        </div>
        <Tabs className="justify-center text-white">
            <TabList className="m-3">
                <Tab>Ulaşımda Yapay Zeka</Tab>
                <Tab>Jet Takimi</Tab>
                <Tab>Psikoloji</Tab>
            </TabList>

            <TabPanel>
                <Crew></Crew>
            </TabPanel>
            <TabPanel>
                {/*second content*/}
                <Crew></Crew>
            </TabPanel>
            <TabPanel>
                {/*third content*/}
                <Crew></Crew>
            </TabPanel>
        </Tabs>
    </section>
);
export default homeTab;
