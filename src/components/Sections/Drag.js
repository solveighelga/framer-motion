import cardData from "../Cards/CardData";
import Card from "../Cards/Card";
import { useState } from "react";
import "../../styles.css";


export default function Scroll() {
// isOpen State is to determine if the card is open or not
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="cardContainer">
            {/* layout to the card, it will detect any changes to the layout and it will detect any of the properties, postion or size */}
            {/* layout: duration; how long it takes -  */}
            {cardData.filter(card => card.category === "Drag").map ((card) => { 
                return (
                <Card card={card} isOpen={isOpen} setIsOpen={setIsOpen}/>
                )
            })}
            
        </div>
    )
}