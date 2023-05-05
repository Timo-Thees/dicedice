import Heading from "../components/Heading";
import {InnerFlexbox, OuterFlexbox, StatsEntry} from "../components/design"
import { useState, useEffect } from "react";
import { diceButtonTextArray } from "../components/diceButtonText";
import { monsterOfTheWeekMoveList } from "../components/monsterOfTheWeekMovelist";

export default function MonsterOfTheWeek({setPage}){
    const [diceButtonText, setDiceButtonText] = useState("Klick to roll dice")
    const [resultOverlay, setResultOverlay] = useState(false)

    function getRandomInteger(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }
    
    function changeDiceText(){
        setDiceButtonText(diceButtonTextArray[getRandomInteger(0, diceButtonTextArray.length)])
    }

    useEffect(() => {
        changeDiceText()
    }, [])

    const handleRollDice = () =>{
        event.preventDefault();
        console.log(event.target.form.advanced)
        const modifier = event.target.form.modifier.value
        const diceResult = getRandomInteger(1,7) + getRandomInteger(1,7) + modifier
        changeDiceText();
        setResultOverlay(true);
    }

    return(
        <div>
            <Heading>Monster of the Week</Heading>
        	<StatsEntry>
                <h3>Set your modifier</h3>
                <input type="number" min="-2" max="4" placeholder="0" id="modifier"></input>
                <input type="checkbox" id="advanced"></input>
                <label for="advanced">This move is advanced</label>
                <button onClick={handleRollDice}>{diceButtonText}</button>
                <h4>Select your move</h4>
                <OuterFlexbox>
                    <InnerFlexbox>
                        <OuterFlexbox>
                                <input type="radio" id="Just result" name="move"/>
                                <label htmlFor="Just result">Just roll dice</label>
                        </OuterFlexbox>
                        {monsterOfTheWeekMoveList.map(move =>{
                            return(
                                <OuterFlexbox key={move.key}>
                                    <input type="radio" id={move.name} name="move"/>
                                    <label htmlFor={move.name}>{move.name}</label>
                                    <p>{move.tooltip}</p><br/>
                                    <p>"Atribut: "{move.rollWith}</p>
                                </OuterFlexbox>
                            )
                        })}
                    </InnerFlexbox>
                </OuterFlexbox>                        
            </StatsEntry>
            <button onClick={()=> setPage("home")}>Home</button>
        </div>
    )
}