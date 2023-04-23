import cardData from "../Cards/CardData";
import Card from "../Cards/Card";
import { useState } from "react";
import "../../styles.css";


export default function Progress() {
// isOpen State is to determine if the card is open or not
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="cardContainer">
            {cardData.filter(card => card.category === "Progress").map ((card) => { 
                return (
                <Card card={card} isOpen={isOpen} setIsOpen={setIsOpen}/>
                )
            })}
            
        </div>
    )
}