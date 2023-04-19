import { motion } from "framer-motion";

// Here is the button that is displayed on the card. It grabs the url from the cardData.js file
function SandboxButton({url}) { 
  
    return (
        <div>
            <a className="buttonLink" href={url} target="_blank" rel="noopener noreferrer">
                <motion.button 
                    style= {{backgroundColor: "#b900bca8" }} 
                    className="codeButton"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}
                    >
                    Sandbox
                </motion.button>
            </a>
        </div>
    );
  }

// Here I am using props to grab my cardData
export default function Card({card, isOpen, setIsOpen}) {
    return (
        <motion.div 
            transition={{layout:{ duration: 1, type: "spring"}}} //layout to the card, it will detect any changes to the layout and it will detect any of the properties, postion or size.
            layout 
            onClick={() => setIsOpen(isOpen === card.id ? false : card.id)} 
            className="card"
            style={{
                borderRadius: "1rem",
                boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)',
            }}
            >
            {/* layout to the children as well, and make it equal to position because we only want to animate the position not the scale */}
            <motion.h2 layout="position">{card.title}</motion.h2>
            {isOpen === card.id && ( 
            <motion.div 
                initial={{ opacity: 0 }} // what state it is in when it begins
                animate={{ opacity: 1 }} // the state it is in during the animation
                transition={{ duration: 1 }} // how long the animation takes
                className="expand"
            >
                <p>{card.text}</p>
                <p>Try it out yourself</p>    
                <SandboxButton url={card.url} className="buttonContainer" />
            </motion.div>
                )}
        </motion.div>
    )
}