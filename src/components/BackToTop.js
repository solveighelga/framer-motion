import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 800) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0, // no navbar on the page so it just goes to the top of the page.
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopButton && (
                <motion.button 
                animate={{ rotate: 360 }}
                transition={{  
                    duration: 2 }}
                style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "50px",
                    width: "50px",
                    fontSize: "40px",
                    borderRadius: "50px",
                    border: "none",
                    cursor: "pointer",
                    opacity: "70%"
                }}
                onClick={scrollUp}
                >⌃</motion.button>
            )}
        </div>

    )

}