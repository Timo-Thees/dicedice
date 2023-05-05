import Heading from "../components/Heading";
import {InnerFlexbox, OuterFlexbox, StatsEntry} from "../components/design"
import { useState, useEffect } from "react";
import { diceButtonTextArray } from "../components/diceButtonText";

export default function MonsterOfTheWeek({setPage}){
    const [diceButtonText, setDiceButtonText] = useState("Klick to roll dice")

    function getRandomInteger(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }
    
    function changeDiceText(){
        setDiceButtonText(diceButtonTextArray[getRandomInteger(0, diceButtonTextArray.length)])
    }

    const handleRollDice = () =>{
        event.preventDefault();
        changeDiceText();
    }

    return(
        <div>
            <Heading>Monster of the Week</Heading>
        	<StatsEntry>
                <h3>Set your modefier</h3>
                <input type="number" min="-2" max="4" placeholder="0"></input>
                <input type="checkbox" id="advanced"></input>
                <label for="advanced">This move is advanced</label>
                <button onClick={handleRollDice}>{diceButtonText}</button>
                <h4>Select your move</h4>
                <OuterFlexbox>
                    <InnerFlexbox>
                        <input type="radio" id="Playbook Move" name="move"></input>
                        <label for="Playbook Move">A move from your playbook</label><br/>
                        <input type="radio" id="Act under Pressure" name="move"></input>
                        <label for="Act under Pressure">Act under Pressure</label><br/>
                        <input type="radio" id="Kick some Ass" name="move"></input>
                        <label for="Kick some Ass">Kick some Ass</label><br/>
                        <input type="radio" id="Help out" name="move"></input>
                        <label for="Help out">Help out</label><br/>
                        <input type="radio" id="Protect someone" name="move"></input>
                        <label for="Protect someone">Protect someone</label><br/>
                        <input type="radio" id="Investigate a Mystery" name="move"></input>
                        <label for="Investigate a Mystery">Investigate a Mystery</label><br/>
                        <input type="radio" id="Read a Bad Situation" name="move"></input>
                        <label for="Read a Bad Situation">Read a Bad Situation</label><br/>
                        <input type="radio" id="Manipulate Someone" name="move"></input>
                        <label for="Manipulate Someone">Manipulate Someone</label><br/>
                    </InnerFlexbox>
                    <InnerFlexbox>
                        <input type="radio" id="Use Magic" name="move"></input>
                        <label for="Use Magic">Use Magic</label><br/>
                        <input type="radio" id="Empath" name="move"></input>
                        <label for="Empath">Empath</label><br/>
                        <input type="radio" id="Illuminated" name="move"></input>
                        <label for="Illuminated">Illuminated</label><br/>
                        <input type="radio" id="No Limits" name="move"></input>
                        <label for="No Limits">No Limits</label><br/>
                        <input type="radio" id="Past Lives" name="move"></input>
                        <label for="Past Lives">Past Lives</label><br/>
                        <input type="radio" id="Sensitive" name="move"></input>
                        <label for="Sensitive">Sensitive</label><br/>
                        <input type="radio" id="Trust your Gut" name="move"></input>
                        <label for="Trust your Gut">Trust your Gut</label><br/>
                        <input type="radio" id="Telekinesis" name="move"></input>
                        <label for="Telekinesis">Telekinesis</label><br/>
                        <input type="radio" id="Weird Science" name="move"></input>
                        <label for="Weird Science">Weird Science</label><br/>
                    </InnerFlexbox>
                </OuterFlexbox>
                        
                        
            </StatsEntry>
            <button onClick={()=> setPage("home")}>Home</button>
        </div>
    )
}