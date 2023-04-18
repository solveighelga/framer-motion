import cardData from "../Cards/CardData";
import Card from "../Cards/Card";
import { useState } from "react";
import "../../styles.css";

export default function Scroll() {
    // isOpen State is to determine if the card is open or not
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="cardContainer">
            {cardData.filter(card => card.category === "Toggle").map ((card) => { // here I am filtering through my cards and grabbing the category
                return (
                <Card card={card} isOpen={isOpen} setIsOpen={setIsOpen}/>
                )
            })}
            
        </div>
    )
}