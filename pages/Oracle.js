import Heading from "../components/Heading";
import { Subheading } from ".";
import { useState } from "react";
import { fatesTableArray } from "../components/fatesTable";

export default function Oracle({setPage}){
    const [yesOrNo, setYesOrNo] = useState("Yes or No?")
    const [howMuch, setHowMuch] = useState("How Much?")
    const [theFates, setTheFates] = useState("Ask the Fates")

    function getRandomInteger(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    const handleYesOrNo = ()=>{
        const yesOrNoDiceResult = (getRandomInteger(1,7) + getRandomInteger(1,7))
        if (yesOrNoDiceResult <= 6){
            setYesOrNo("No")
        } else if(yesOrNoDiceResult >= 7 && yesOrNoDiceResult <= 9){
            setYesOrNo("Yes, but expect complications")
        } else {
            setYesOrNo("Yes")
        }

    }
    const handleHowMuch = ()=>{
        setHowMuch(getRandomInteger(1,11))
    }

    const handleAskTheFates =()=>{
        const rowDice = getRandomInteger(0, fatesTableArray.length)
        const firstDice = getRandomInteger(0,6)
        const secondDice = getRandomInteger(0,6)
        const tableRow = [...fatesTableArray[rowDice]]
        if (firstDice === secondDice){
            setTheFates("The fates are adamant: " + tableRow[firstDice].toUpperCase())
        } else {
        setTheFates(`The fates say: ${tableRow[firstDice]} and also ${tableRow[secondDice]}`)
        }
    }

    return(
        <div>
            <Heading>Ask the Fates</Heading>
            <Subheading>{yesOrNo}</Subheading>
            <button onClick={handleYesOrNo}>Yes or No?</button>
            <Subheading>{howMuch}</Subheading>
            <button onClick={handleHowMuch}>How Much?</button>
            <Subheading>{theFates}</Subheading>
            <button onClick={handleAskTheFates}>Ask the Fates</button>
            <button onClick={() => setPage("home")}>Home</button>
        </div>
    )
}