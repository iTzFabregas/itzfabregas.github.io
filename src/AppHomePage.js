import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme"
import Projects from "./components/Projects"
import { useEffect, useState } from "react";
//import Contact from "./components/Contact"
//import Footer from "./components/Footer"

function App() {

    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="relative h-[200vh]">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('./template.jpg')",
                        transform: `translateY(${offsetY * 0.5}px)`, // Move em velocidade diferente
                    }}
                />

                <Navbar />
                <Aboutme />
                <Projects />
            </div>
        </>
    );
}

export default App;
