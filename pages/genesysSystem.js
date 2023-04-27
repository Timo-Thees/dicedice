import styled, { keyframes } from "styled-components"
import { useState, useEffect, useRef } from "react";
import { diceButtonTextArray } from "../components/diceButtonText";
import {rollResults} from "../components/rollResults";

export default function Genesys(){
    const [dice, setDice] = useState({yellow: 0, green: 0, blue: 0, red: 0, purple: 0, black: 0})
    const [triumphs, setTriumphs] = useState([])
    const [successes, setSuccesses] = useState([])
    const [advantage, setAdvantage] = useState([])
    const [disadvantage, setDisadvantage] = useState([])
    const [failure, setFailure] = useState([])
    const [disaster, setDisaster] = useState([])
    const [animationDelayAdvantages, setAnimationDelayAdvantages] = useState(0)
    const [animationDelaySuccesses, setAnimationDelaySuccesses] = useState(0)
    const [diceButtonText, setDiceButtonText] = useState("Klick to roll dice")
    
    const iconReference = useRef(null);

    useEffect(() => {
        rollResults(dice, advantage, setAdvantage, disadvantage, setDisadvantage, setAnimationDelayAdvantages, successes, setSuccesses, failure, setFailure, setAnimationDelaySuccesses)
    }, [dice])

    const rollDice = (event) =>{
        event.preventDefault();
    const yellow = (event.target.yellow.value === ""? 0 : event.target.yellow.value * 1)
    const green = (event.target.green.value === ""? 0 : event.target.green.value * 1)
    const blue = (event.target.blue.value === ""? 0 : event.target.blue.value * 1)
    const red = (event.target.red.value === ""? 0 : event.target.red.value * 1)
    const purple = (event.target.purple.value === ""? 0 : event.target.purple.value * 1)
    const black = (event.target.black.value === ""? 0 : event.target.black.value * 1)
        setDice({yellow: yellow, green: green, blue: blue, red: red, purple: purple, black: black});
        setTriumphs([]);
        setSuccesses([]);
        setAdvantage([]);
        setDisadvantage([]);
        setFailure([]);
        setDisaster([]);
        setAnimationDelaySuccesses(0);
        setAnimationDelayAdvantages(0);
        changeDiceText();
    }

    function getRandomInteger(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    useEffect(() => {
        changeDiceText()
    }, [])

    function changeDiceText(){
        setDiceButtonText(diceButtonTextArray[getRandomInteger(0, diceButtonTextArray.length -1)])
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
            <button type="submit">{diceButtonText}</button>
        </StatsEntry>
        <ResultsContainer>
        <ResultsRow>
            <p>Chanchen</p>
            {advantage.map(result => {
                if(result.negated === true){
                return(
                    <ShowResults
                    key={result.key}
                    animationDelay={result.key}
                    secondDelay={0}
                    ref={iconReference}
                    >
                        <NormalIcon src="/chance.png"/>
                        <NegatedIcon animationDelay={result.key} secondDelay={0} src="/chance-neutralised.png" alt="Advantage was neutralised" />
                    </ShowResults>
                    
                )
                } else {
                return(
                    <ShowResults 
                        key={result.key}
                        animationDelay={result.key} 
                        secondDelay={0}
                        ref={iconReference}
                        >
                         <NormalIcon src="/chance.png" alt="Advantage" />
                    </ShowResults>
                )    
                }
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Bedrohungen</p>
            {disadvantage.map(result => {
                if(result.negated === true){
                return(
                    <ShowResults
                    key={result.key}
                    animationDelay={result.key}
                    secondDelay={0.3}>
                    <img key={result.key} src="/bedrohung-neutralised.png" alt="Disadvantage was neutralised" />
                    </ShowResults>
                    
                )
                } else {
                return(
                    <ShowResults 
                    key={result.key}
                    animationDelay={result.key} 
                    secondDelay={0}>
                    <img src="/bedrohung.png" alt="disadvantae" />
                    </ShowResults>
                )    
                }
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Erfolge</p>
            {successes.map(result => {
                if(result.negated === true){
                return(
                    <ShowResults
                    key={result.key}
                    animationDelay={result.key}
                    secondDelay={animationDelayAdvantages + 1}>
                    <img src="/erfolg-neutralised.png" alt="Success was neutralised" />
                    </ShowResults>
                    
                )
                } else {
                return(
                    <ShowResults 
                    key={result.key}
                    animationDelay={result.key}
                    secondDelay={animationDelayAdvantages + 1}>
                    <img src="/erfolg.png" alt="Success" />
                    </ShowResults>
                )    
                }
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Misserfolge</p>
            {failure.map(result => {
                if(result.negated === true){
                return(
                    <ShowResults
                    key={result.key}
                    animationDelay={result.key}
                    secondDelay={animationDelayAdvantages + 1.3}>
                    <img src="/misserfolg-neutralised.png" alt="Failure was neutralised" />
                    </ShowResults>
                    
                )
                } else {
                return(
                    <ShowResults 
                    key={result.key}
                    animationDelay={result.key} 
                     secondDelay={animationDelayAdvantages +1 }>
                    <img src="/misserfolg.png" alt="Failure" />
                    </ShowResults>
                )    
                }
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Katastrophen</p>
            {disaster.map(result => {
                return(
                    <ShowResults 
                    key={result.key}
                    animationDelay={result.key} 
                    secondDelay={animationDelayAdvantages + animationDelaySuccesses +2}
                    >
                    <img src="/katastrophe.png" alt="Disaster!" />
                    </ShowResults>
                )
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Triumphe</p>
            {triumphs.map(result => {
              {return(
                    <ShowResults animationDelay={result.key} key={result.key} 
                    secondDelay={animationDelayAdvantages + animationDelaySuccesses + disaster.length +2}>
                    <img src="/triumph.png" alt="Triumph!" />
                    </ShowResults>
                )}
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
display: flex;
flex-direction: row;
`
const animatePositiveResult = keyframes`
from {
    opacity: 0.0;
}
to {
    opacity: 1;
}
`

const ShowResults = styled.div`
min-width: 50px;
animation: ${animatePositiveResult} 0.3s ease-in;
animation-delay: ${props => (props.animationDelay -1)* 1 + props.secondDelay}s;
animation-fill-mode: backwards;
`

const NormalIcon = styled.img`
top: 10px;
left: 10px;
`

const NegatedIcon = styled(NormalIcon)`
position: relative;
left: -25px;
top: 0px;
z-index: 2;
animation: animation: ${animatePositiveResult} 1s ease-in;
animation-delay: ${props => (props.animationDelay -1)* 1 + props.secondDelay + 10}s;
animation-fill-mode: backwards;
`

//
