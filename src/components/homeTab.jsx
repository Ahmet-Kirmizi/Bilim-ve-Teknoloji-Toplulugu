import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UlasimdaYapayZeka from "./ulasimdaYapayZeka.jsx";
import styles from "../style.js";
import JetMotoru from "./jetMotoru.jsx";
import Helikopter from "./helikopter.jsx";
import Psikoloji from "./psikoloji.jsx";
const Ekiplerimiz = () => (
    <section>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={styles.heading2}>
                Ekiplerimiz <br className="sm:block hidden" />
            </h2>

        </div>
        <Tabs className="justify-center text-white">
            <TabList className="ml-3 mr-3">
                <Tab>Ulaşımda Yapay Zeka</Tab>
                <Tab>Jet Motoru Tasarımı</Tab>
                <Tab>Helikopter Tasarımı</Tab>
                <Tab>Psikolojide Teknoloji</Tab>
                <Tab>İnsanlık Yararına Teknoloji Yarışması</Tab>
            </TabList>

            <TabPanel>
                <UlasimdaYapayZeka></UlasimdaYapayZeka>
            </TabPanel>
            <TabPanel>
                <JetMotoru></JetMotoru>
            </TabPanel>
            <TabPanel>
                <Helikopter></Helikopter>
            </TabPanel>
            <TabPanel>
                <Psikoloji/>
            </TabPanel>
        </Tabs>
    </section>
);
export default Ekiplerimiz;
