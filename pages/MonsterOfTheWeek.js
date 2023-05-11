import Heading from "../components/Heading";
import {InnerFlexbox, OuterFlexbox, StatsEntry} from "../components/design"
import { useState, useEffect } from "react";
import { diceButtonTextArray } from "../components/diceButtonText";
import { monsterOfTheWeekMoveList } from "../components/monsterOfTheWeekMovelist";
import MonsterOfTheWeekResultOverlay from "../components/motwOverlay"

export default function MonsterOfTheWeek({setPage}){
    const [diceButtonText, setDiceButtonText] = useState("Klick to roll dice")
    const [resultOverlay, setResultOverlay] = useState(false)
    const [selectMove, setSelectMove] = useState(false)
    const [diceResult, setDiceResult] = useState()
    const [isAdvanced, setIsAdvanced] = useState(false)

    function getRandomInteger(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }
    
    function changeDiceText(){
        setDiceButtonText(diceButtonTextArray[getRandomInteger(0, diceButtonTextArray.length)])
    }

    useEffect(() => {
        function initiateDiceText(){
            setDiceButtonText(diceButtonTextArray[getRandomInteger(0, diceButtonTextArray.length)])
        }
        initiateDiceText()
    }, [])

    const handleRollDice = () =>{
        event.preventDefault();
        console.log(event.target.form.advanced)
        const modifier = (event.target.form.modifier.value === "" ? 0 : event.target.form.modifier.value*1)
        setDiceResult({firstDice: getRandomInteger(1,7), secondDice: getRandomInteger(1,7), modifier: modifier, selectedMove: selectMove, isAdvanced: isAdvanced})
        changeDiceText();
        setResultOverlay(true);
    }

    return(
        <div>
            {resultOverlay === true ? (
            <MonsterOfTheWeekResultOverlay diceResult={diceResult} setResultOverlay={setResultOverlay} setSelectMove={setSelectMove}/>
) : (<></>)
            }
            <Heading>Monster of the Week</Heading>
        	<StatsEntry>
                <h3>Set your modifier</h3>
                <input type="number" min="-2" max="4" placeholder="0" id="modifier"></input>
                <input type="checkbox" id="advanced" onChange={()=>setIsAdvanced(!isAdvanced)}></input>
                <label for="advanced">This move is advanced</label>
                <button onClick={handleRollDice}>{diceButtonText}</button>
                <h4>Select your move</h4>
                <OuterFlexbox>
                    <InnerFlexbox>
                        {monsterOfTheWeekMoveList.map(move =>{
                            return(
                                <OuterFlexbox key={move.key}>
                                    <input type="radio" id={move.name} name="move" value={move.key} onChange={()=>setSelectMove(move.key)}/>
                                    <label htmlFor={move.name}>{move.name}</label>
                                    <p>{move.tooltip}</p><br/>
                                    <p>Atribut: {move.rollWith}</p>
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