import { useRef, useEffect } from "react";
import {Link} from 'react-scroll'
import { motion, useInView, useAnimate, stagger} from "framer-motion";
import "../../styles.css";


// https://www.framer.com/motion/transition/ 
// https://www.framer.com/motion/stagger/
// https://www.framer.com/motion/use-animate/
const staggerListItems = stagger(1, { startDelay: 1 });


export default function MainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // This "li" selector will only select children
    // of the element that receives `scope`.
    animate(
        "li",
        isInView
            ? { opacity: 1, scale: 1, filter: "blur(0px)" }
            : { opacity: "0", scale: 3, filter: "blur(80px)" },
        {
            duration: 0.2,
            delay: isInView ? staggerListItems : 0
      }
    );
  }, [isInView, animate]);

  return (
    <>
        <motion.div className="mainSection" ref={ref}>
            <h1 
                style={{
                    transform: isInView ? "none" : "translateX(-500px)",
                    opacity: isInView ? 1 : 0,
                    transition: "0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                className="mainTitle"
            > 
                Workshop Guide
            </h1>
            <h2>Here is what you will be testing</h2>
            <motion.div>
            <motion.ul 
            className="listContainer"
            ref={scope} // here I am using scope on my 'motion.ul' to animate my 'li' elements as staggered
            >
                <motion.li 
                    className="listItem"
                    whileHover={{color: "#f30090", scale: 1.01}}
                >
                    <Link to="toggle" spy={true} smooth={true} offset={-100} duration={500}>
                        Toggle Switch
                    </Link>
                </motion.li>
                <motion.li 
                    whileHover= {{ color: "#b800bc", scale: 1.01}} 
                    className="listItem" 
                >
                    <Link to="button" spy={true} smooth={true} offset={-100} duration={1000}>
                        Button Effects
                    </Link>
                </motion.li>
                <motion.li 
                    whileHover= {{color: "#8f00dd", scale: 1.01}} 
                    className="listItem" 
                >
                    <Link to="drag" spy={true} smooth={true} offset={-100} duration={1500}>
                        Drag
                    </Link>
                </motion.li>
                <motion.li 
                    whileHover= {{color: "#7100fd", scale: 1.01}} 
                    className="listItem" 
                >
                    <Link to="path" spy={true} smooth={true} offset={-100} duration={2000}>
                        Path
                    </Link>
                </motion.li>
                <motion.li 
                    whileHover= {{color: "#1b8eff", scale: 1.01 }} 
                    className="listItem" 
                >
                    <Link to="scroll" spy={true} smooth={true} offset={-100} duration={2500}>
                        Scroll
                    </Link>
                </motion.li>
            </motion.ul>
            </motion.div>
        </motion.div>
    </>
  )}