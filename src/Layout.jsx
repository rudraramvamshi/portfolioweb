import { About, Contact, Experience, Hero, StarsCanvas, Tech, Training, Works } from "./components";
import Summer from "./components/summer";
import Particle from "./components/canvas/Particle";


const Layout = () => {
    return (
        <>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Hero />
            </div>
            <About />
            <Tech />
            <Summer />
            <Works />
            <Experience />
            <Training />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
            <Particle />
        </>

    );
}

export default Layout;