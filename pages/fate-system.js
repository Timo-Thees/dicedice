import styled from "styled-components"
import { useState, useEffect } from "react";

export default function Fate(){
    const [dice, setDice] = useState({yellow: 0, green: 0, blue: 0, red: 0, purple: 0, black: 0})
    const [triumphs, setTriumphs] = useState([])
    const [successes, setSuccesses] = useState([])
    const [advantage, setAdvantage] = useState([])
    const [disadvantage, setDisadvantage] = useState([])
    const [failure, setFailure] = useState([])
    const [disaster, setDisaster] = useState([])

    const rollDice = (event) =>{
        event.preventDefault();
    const yellow = (event.target.yellow.value === ""? 0 : event.target.yellow.value * 1)
    const green = (event.target.green.value === ""? 0 : event.target.green.value * 1)
    const blue = (event.target.blue.value === ""? 0 : event.target.blue.value * 1)
    const red = (event.target.red.value === ""? 0 : event.target.red.value * 1)
    const purple = (event.target.purple.value === ""? 0 : event.target.purple.value * 1)
    const black = (event.target.black.value === ""? 0 : event.target.black.value * 1)
        setDice({yellow: yellow, green: green, blue: blue, red: red, purple: purple, black: black});
        console.log(dice);
        console.log("hiernach müsste use effect aktivieren")
        setTriumphs([]);
        setSuccesses([]);
        setAdvantage([]);
        setDisadvantage([]);
        setFailure([]);
        setDisaster([]);
    }
   useEffect(() => {
        console.log(dice);
        console.log("useEffect wurde aktiviert")
        rollResults()
    }, [dice])
    function rollResults(){
        if(dice.yellow > 0){
            const yellowDiceRemaining = dice.yellow - 1;
            const yellowResult = Math.random() * 12;
            if (yellowResult > 0 && yellowResult < 8){
                setSuccesses(...successes, {key: successes.length +1, negated: false})
            }
            if (yellowResult > 2 && yellowResult < 5){
                setSuccesses(...successes, {key: successes.length +1, negated: false})
            }
            if (yellowResult > 4 && yellowResult < 11){
                setAdvantage(...advantage, {key: advantage.length +1, negated: false})
            }
            if (yellowResult > 8 && yellowResult < 11){
                setAdvantage(...advantage, {key: advantage.length +1, negated: false})
            }
            if (yellowResult === 11){
                setTriumphs(...triumphs, {key: triumphs.length +1, negated: false})
            }
            setDice({...dice, yellow: yellowDiceRemaining});
            return;
        }
        if(dice.green > 0){
            const greenDiceRemaining = dice.green -1;
            const greenResult = Math.random() * 8;
            if (greenResult > 0 && greenResult < 5){
                setSuccesses(...successes, {key: successes.length +1, negated: false})
            }
            if (greenResult === 3){
                setSuccesses(...successes, {key: successes.length +1, negated: false})
            }
            if (greenResult > 3){
                setAdvantage(...advantage, {key: advantage.length +1, negated: false})
            }
            if (greenResult === 7){
                setAdvantage(...advantage, {key: advantage.length +1, negated: false})
            }
            setDice({...dice, green: greenDiceRemaining - 1});
            return;
        }
        if(dice.blue > 0){
            const blueDiceRemaining = dice.blue -1
            const blueResult = Math.random() * 6
            if (blueResult > 1 && blueResult < 4){
                setSuccesses(...successes, {key: successes.length +1, negated: false})
            }
            if (blueResult > 2 && blueResult < 5){
                setAdvantage(...advantage, {key: advantage.length +1, negated: false})
            }
            if (blueResult > 3){
                setAdvantage(...advantage, {key: advantage.length +1, negated: false})
            }
            setDice({...dice, blue: blueDiceRemaining - 1});
            return;
        }
        if(dice.red > 0){
            const redDiceRemaining = dice.red -1
            const redResult = Math.random() * 12
            if (redResult > 0 && redResult < 7){
                setFailure(...failure, {key: failure.length +1, negated: false})
            }
            if (redResult > 2 && redResult < 5){
                setFailure(...failure, {key: failure.length +1, negated: false})
            }
            if (redResult > 4 && redResult < 11){
                setDisadvantage(...disadvantage, {key: disadvantage.length +1, negated: false})
            }
            if (redResult > 8 && redResult < 11){
                setDisadvantage(...disadvantage, {key: disadvantage.length +1, negated: false})
            }
            if (redResult === 11){
                setDisaster(...disaster, {key: disaster.length +1, negated: false})
            }
            setDice({...dice, red: redDiceRemaining});
            return;
        }
        if(dice.purple > 0){
            const purpleDiceRemaining = dice.purple -1
            const purpleResult = Math.random() * 8
            if (purpleResult > 0 && purpleResult < 4){
                setFailure(...failure, {key: failure.length +1, negated: false})
            }
            if (purpleResult === 2){
                setFailure(...failure, {key: failure.length +1, negated: false})
            }
            if (purpleResult > 2){
                setDisadvantage(...disadvantage, {key: disadvantage.length +1, negated: false})
            }
            if (purpleResult === 7){
                setDisadvantage(...disadvantage, {key: disadvantage.length +1, negated: false})
            }
            setDice({...dice, purple: purpleDiceRemaining});
            return;
        }
        if(dice.black > 0){
            const blackDiceRemaining = dice.black -1
            const blackResult = Math.random() * 12
            if (blackResult > 1 && blackResult < 4){
                setFailure(...failure, {key: failure.length +1, negated: false})
            }
            if (blackResult > 3){
                setDisadvantage(...disadvantage, {key: disadvantage.length +1, negated: false})
            }
            setDice({...dice, black: blackDiceRemaining});
            return;
        }
    }
    return(
        <div>
        <StatsEntry onSubmit={rollDice}>
            <OuterFlexbox>
            <InnerFlexbox>
            <h4>boni</h4>
            <img src="/yellow_dice.png" alt="yellow d12"/>
            <p>Gelb</p>
            <input type="number" min="0" placeholder="0" name="yellow"></input>
            <img src="/green_dice.png" alt="green d8"/>
            <p>Grün</p>
            <input type="number" min="0" placeholder="0" name="green"></input>
            <img src="/blue_dice.png" alt="blue d6"/>
            <p>Blau</p>
            <input type="number" min="0" placeholder="0" name="blue"></input>
            </InnerFlexbox>
            <InnerFlexbox>
            <h4>mali</h4>
            <img src="/red_dice.png" alt="red d12"/>
            <p>Rot</p>
            <input type="number" min="0" placeholder="0" name="red"></input>
            <img src="/purple_dice.png" alt="purple d8"/>
            <p>Lila</p>
            <input type="number" min="0" placeholder="0" name="purple"></input>
            <img src="/black_dice.png" alt="black d6"/>
            <p>Schwarz</p>
            <input type="number" min="0" placeholder="0" name="black"></input>
            </InnerFlexbox>
            </OuterFlexbox>
            <button type="submit">roll 'em bones!</button>
        </StatsEntry>
        <ResultsContainer>
        <ResultsRow>
            <p>Triumphe</p>
            {triumphs.map(result => {
                return(
                    <img key={result.key} src="/triumph.png" alt="Triumph!" />
                )
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Erfolge</p>
            {successes.map(result => {
                return(
                    <img key={result.key} src="/erfolg.png" alt="Success" />
                )
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Misserfolge</p>
            {failure.map(result => {
                return(
                    <img key={result.key} src="/misserfolg.png" alt="Failure" />
                )
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Chanchen</p>
            {advantage.map(result => {
                return(
                    <img key={result.key} src="/chanche.png" alt="Andvantage" />
                )
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Bedrohungen</p>
            {disadvantage.map(result => {
                return(
                    <img key={result.key} src="/bedrohung.png" alt="Disadvantage" />
                )
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Katastrophen</p>
            {disaster.map(result => {
                return(
                    <img key={result.key} src="/katastrophe.png" alt="Disaster!" />
                )
            })}
        </ResultsRow>
        </ResultsContainer>
        </div>
    )
}

const StatsEntry = styled.form`
background-color: grey;
display: flex;
flex-direction: column;
align-items: center;
`;

const OuterFlexbox = styled.div`
display: flex;
flex-direction: row;
`;

const InnerFlexbox = styled.div`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
`;

const ResultsContainer = styled.div`
background-color: lightgrey;
min-height: 20vh
display: flex;
flex-direction: row;
`
const ResultsRow = styled.div`
border-style: solid;
border-width: 1px;
border-color: black;
`