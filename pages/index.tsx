import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import About from "../components/About/About";

import HomeServicesSection from "../components/Services/HomeServicesSection";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/icon?family=Material+Icons'
                />
            </Head>
            <Navbar />
            <Header />
            <About />
            <HomeServicesSection />
        </div>
    );
}
