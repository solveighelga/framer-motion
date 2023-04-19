import {motion} from "framer-motion";

// This is a button that takes you to the sandbox I will be demonstrating in the presentation.
export default function OriginalSandbox({url}) { 
 console.log(url);
  
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <motion.button 
                    className="exampleLink"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}
                    >
                    Example from Presentation
                </motion.button>
            </a>
        </div>
    );
  }