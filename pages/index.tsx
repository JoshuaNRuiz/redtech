import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import About from "../components/About/About";

import HomeServicesSection from "../components/Services/HomeServicesSection";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <HomeServicesSection />
        </div>
    );
}
