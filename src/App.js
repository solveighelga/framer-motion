import { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import "./styles.css";

// Here are my sections and components
import MainSection from "./components/Sections/Main";
import Toggle from "./components/Sections/Toggle";
import ButtonCard from "./components/Sections/Button";
import Drag from "./components/Sections/Drag";
import Path from "./components/Sections/Path";
import Scroll from "./components/Sections/Scroll";
import BackToTopButton from "./components/BackToTop";




function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(); //https://www.framer.com/motion/use-scroll/

  return (
    <>
       <motion.div
       className="progress-bar"
       style={{ scaleX: scrollYProgress }} />

      <MainSection ref={ref}/>
      {/* React library uses the id to identify where to scroll */}
      <Section ref={ref}> 
        <h1 className="sectionTitle" id='toggle' >Toggle Switch</h1>
        <Toggle className="sectionContent" />
      </Section>
      
      <Section ref={ref}>
        <h1 className="sectionTitle" id='button' >Buttons</h1>
        <ButtonCard />
      </Section>
      
      <Section ref={ref}>
        <h1 className="sectionTitle" id='drag'>Drag</h1>
        <Drag />
      </Section>
      
      <Section ref={ref}>
        <h1 className="sectionTitle" id='path'>Path</h1>
        <Path />
      </Section>
      
      <Section ref={ref}>
        <h1 className="sectionTitle" id='scroll'>Scroll</h1>
        <Scroll />
      </Section>
      
      < BackToTopButton />
    </>
  );
}