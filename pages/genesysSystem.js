import styled, { keyframes } from "styled-components"
import { useState, useEffect } from "react";
import { diceButtonTextArray } from "../components/diceButtonText";

export default function Genesys(){
    const [dice, setDice] = useState({yellow: 0, green: 0, blue: 0, red: 0, purple: 0, black: 0})
    const [triumphs, setTriumphs] = useState([])
    const [successes, setSuccesses] = useState([])
    const [advantage, setAdvantage] = useState([])
    const [disadvantage, setDisadvantage] = useState([])
    const [failure, setFailure] = useState([])
    const [disaster, setDisaster] = useState([])
    const [animationDelayAdvantages, setAnimationDelayAdvantages] = useState({delayFromNegation: 0, totalDelay: 0})
    const [animationDelaySuccesses, setAnimationDelaySuccesses] = useState({delayFromNegation: 0, totalDelay: 0})
    const [diceButtonText, setDiceButtonText] = useState("Klick to roll dice")

    useEffect(() => {
        rollResults()
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
        setAnimationDelaySuccesses({delayFromNegation: 0, totalDelay: 0});
        setAnimationDelayAdvantages({delayFromNegation: 0, totalDelay: 0});
    }

    function rollResults(){
        if(dice.yellow > 0){
            const yellowDiceRemaining = dice.yellow - 1;
            const yellowResult = getRandomInteger(1, 13);
            if (yellowResult >= 2 && yellowResult <= 3){
                setSuccesses([...successes, {key: successes.length +1, negated: false}])
            }
            if (yellowResult >= 4 && yellowResult <= 5){
                setSuccesses([...successes, {key: successes.length +1, negated: false}, {key: successes.length +2, negated: false}])
            }
            if (yellowResult === 6){
                setAdvantage([...advantage, {key: advantage.length +1, negated: false}])
            }
            if (yellowResult >= 7 && yellowResult <= 9){
                setAdvantage([...advantage, {key: advantage.length +1, negated: false}]);
                setSuccesses([...successes, {key: successes.length +1, negated: false}])
            }
            if (yellowResult >= 10 && yellowResult <= 11){
                setAdvantage([...advantage, {key: advantage.length +1, negated: false}, {key: advantage.length +2, negated: false}])
            }
            if (yellowResult === 12){
                setTriumphs([...triumphs, {key: triumphs.length +1}])
                setSuccesses([...successes, {key: successes.length +1, negated: false}])
            }
            setDice({...dice, yellow: yellowDiceRemaining});
            return;
        }
        if(dice.green > 0){
            const greenDiceRemaining = dice.green -1;
            const greenResult = getRandomInteger(1, 9);
            if (greenResult >= 2 && greenResult <= 3){
                setSuccesses([...successes, {key: successes.length +1, negated: false}])
            }
            if (greenResult === 4){
                setSuccesses([...successes, {key: successes.length +1, negated: false}, {key: successes.length +2, negated: false}])
            }
            if (greenResult >= 5 && greenResult <= 6){
                setAdvantage([...advantage, {key: advantage.length +1, negated: false}])
            }
            if (greenResult === 7){
                setAdvantage([...advantage, {key: advantage.length +1, negated: false}])
                setSuccesses([...successes, {key: successes.length +1, negated: false}])
            }
            if (greenResult === 8){
                setAdvantage([...advantage, {key: advantage.length +1, negated: false}, {key: advantage.length +2, negated: false}])
            }
            setDice({...dice, green: greenDiceRemaining - 1});
            return;
        }
        if(dice.blue > 0){
            const blueDiceRemaining = dice.blue -1
            const blueResult = getRandomInteger(1, 7);
            if (blueResult === 3){
                setSuccesses([...successes, {key: successes.length +1, negated: false}])
            }
            if (blueResult === 4){
                setSuccesses([...successes, {key: successes.length +1, negated: false}])
                setAdvantage([...advantage, {key: advantage.length +1, negated: false}])
            }
            if (blueResult === 5){
                setAdvantage([...advantage, {key: advantage.length +1, negated: false},{key: advantage.length +2, negated: false}])
            }
            if (blueResult === 6){
                setAdvantage([...advantage, {key: advantage.length +1, negated: false}])
            }
            setDice({...dice, blue: blueDiceRemaining - 1});
            return;
        }
        if(dice.red > 0){
            const redDiceRemaining = dice.red -1
            const redResult = getRandomInteger(1, 13)
            if (redResult >= 2 && redResult <= 3){
                setFailure([...failure, {key: failure.length +1, negated: false}])
            }
            if (redResult >= 4 && redResult <= 5){
                setFailure([...failure, {key: failure.length +1, negated: false},{key: failure.length +2, negated: false}])
            }
            if (redResult >= 6 && redResult <= 7){
                setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}])
            }
            if (redResult >= 8 && redResult <= 9){
                setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}])
                setFailure([...failure, {key: failure.length +1, negated: false}])
            }
            if (redResult >= 10 && redResult <= 11){
                setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}, {key: disadvantage.length +2, negated: false}])
            }
            if (redResult === 12){
                setDisaster([...disaster, {key: disaster.length +1}])
                setFailure([...failure, {key: failure.length +1, negated: false}])
            }
            setDice({...dice, red: redDiceRemaining});
            return;
        }
        if(dice.purple > 0){
            const purpleDiceRemaining = dice.purple -1
            const purpleResult = getRandomInteger(1, 9)
            if (purpleResult === 2){
                setFailure([...failure, {key: failure.length +1, negated: false}])
            }
            if (purpleResult === 3){
                setFailure([...failure, {key: failure.length +1, negated: false}, {key: failure.length +2, negated: false}])
            }
            if (purpleResult >= 4 && purpleResult <= 6){
                setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}])
            }
            if (purpleResult === 7){
                setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}, {key: disadvantage.length +2, negated: false}])
            }
            if (purpleResult === 8){
                setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}])
                setFailure([...failure, {key: failure.length +1, negated: false}])
            }
            setDice({...dice, purple: purpleDiceRemaining});
            return;
        }
        if(dice.black > 0){
            const blackDiceRemaining = dice.black -1
            const blackResult = getRandomInteger(1, 7)
            if (blackResult >= 3 && blackResult <= 4){
                setFailure([...failure, {key: failure.length +1, negated: false}])
            }
            if (blackResult > 4){
                setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}])
            }
            setDice({...dice, black: blackDiceRemaining});
            return;
        }
        negateOpposites(advantage, setAdvantage, disadvantage, setDisadvantage, setAnimationDelayAdvantages);
        negateOpposites(successes, setSuccesses, failure, setFailure, setAnimationDelaySuccesses);
        changeDiceText();
    }

    function getRandomInteger(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }


    function negateOpposites(firstArray, setFirstArray, secondArray, setSecondArray, setDelay){
        const compareArrayLength = [firstArray.length, secondArray.length];
        compareArrayLength.sort(function(a, b){return b - a});
        const smallerArray = compareArrayLength.pop();
        const biggerArray = compareArrayLength.shift()
        let firstArrayNegated = []
        let firstArrayNotNegated = []
        let secondArrayNegated = []
        let secondArrayNotNegated = []
        function negateFirstArray(arrayEntry){
            if(arrayEntry.key <= smallerArray){
                firstArrayNegated.push({...arrayEntry, negated: true})
            } else {
                firstArrayNotNegated.push(arrayEntry)
            }
        }
        function negateSecondArray(arrayEntry){
            if(arrayEntry.key <= smallerArray){
                secondArrayNegated.push({...arrayEntry, negated: true})
            } else {
                secondArrayNotNegated.push(arrayEntry)
            }
        }
        firstArray.map(negateFirstArray);
        secondArray.map(negateSecondArray);
        setFirstArray([...firstArrayNegated, ...firstArrayNotNegated])
        setSecondArray([...secondArrayNegated, ...secondArrayNotNegated])
        setDelay({delayFromNegation: smallerArray, totalDelay: biggerArray})
    }
    const showAnimationDelays = ()=>{
    console.log(animationDelayAdvantages, animationDelaySuccesses)
    }
    
    useEffect(() => {
        changeDiceText()
    }, [])

    function changeDiceText(){
        setDiceButtonText(diceButtonTextArray[getRandomInteger(0, diceButtonTextArray.length -1)])
    }

    return(
        <div>
            <button onClick={showAnimationDelays}>Show animation delays</button>
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
                    <NegatedResultsPositive
                    key={result.key}
                    animationDelay={result.key}
                    secondDelay={0}
                    thirdDelay={0}
                    >
                    <img key={result.key} src="/chance-neutralised.png" alt="Advantage was neutralised" />
                    </NegatedResultsPositive>
                    
                )
                } else {
                return(
                    <PositiveResult 
                        animationDelay={result.key} 
                        key={result.key}
                        secondDelay={animationDelayAdvantages.delayFromNegation}
                        thirdDelay={0}
                        >
                    <img src="/chance.png" alt="Advantage" />
                    </PositiveResult>
                )    
                }
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Bedrohungen</p>
            {disadvantage.map(result => {
                if(result.negated === true){
                return(
                    <NegatedResultsNegative
                    key={result.key}
                    animationDelay={result.key}
                    secondDelay={0}
                    thirdDelay={0}>
                    <img key={result.key} src="/bedrohung-neutralised.png" alt="Disadvantage was neutralised" />
                    </NegatedResultsNegative>
                    
                )
                } else {
                return(
                    <PositiveResult 
                    animationDelay={result.key} 
                    secondDelay={animationDelayAdvantages.delayFromNegation}
                    thirdDelay={0}
                    key={result.key}>
                    <img src="/bedrohung.png" alt="disadvantae" />
                    </PositiveResult>
                )    
                }
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Erfolge</p>
            {successes.map(result => {
                if(result.negated === true){
                return(
                    <NegatedResultsPositive
                    key={result.key}
                    animationDelay={result.key}
                    secondDelay={animationDelayAdvantages.totalDelay}
                    thirdDelay={0}>
                    <img src="/erfolg-neutralised.png" alt="Success was neutralised" />
                    </NegatedResultsPositive>
                    
                )
                } else {
                return(
                    <PositiveResult 
                    animationDelay={result.key} 
                    key={result.key}
                    secondDelay={animationDelayAdvantages.totalDelay}
                    thirdDelay={animationDelaySuccesses.delayFromNegation}>
                    <img src="/erfolg.png" alt="Success" />
                    </PositiveResult>
                )    
                }
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Misserfolge</p>
            {failure.map(result => {
                if(result.negated === true){
                return(
                    <NegatedResultsNegative
                    key={result.key}
                    animationDelay={result.key}
                    secondDelay={animationDelayAdvantages.totalDelay}
                    thirdDelay={0}>
                    <img src="/misserfolg-neutralised.png" alt="Failure was neutralised" />
                    </NegatedResultsNegative>
                    
                )
                } else {
                return(
                    <PositiveResult 
                    animationDelay={result.key} 
                     key={result.key}
                     secondDelay={animationDelayAdvantages.totalDelay}
                     thirdDelay={animationDelaySuccesses.delayFromNegation}>
                    <img src="/misserfolg.png" alt="Failure" />
                    </PositiveResult>
                )    
                }
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Katastrophen</p>
            {disaster.map(result => {
                return(
                    <PositiveResult 
                    animationDelay={result.key} key={result.key}
                    secondDelay={animationDelayAdvantages.totalDelay}
                    thirdDelay={animationDelaySuccesses.totalDelay}
                    >
                    <img src="/katastrophe.png" alt="Disaster!" />
                    </PositiveResult>
                )
            })}
        </ResultsRow>
        <ResultsRow>
            <p>Triumphe</p>
            {triumphs.map(result => {
              {return(
                    <PositiveResult animationDelay={result.key} key={result.key} 
                    secondDelay={animationDelayAdvantages.totalDelay}
                    thirdDelay={animationDelaySuccesses.totalDelay + disaster.length} >
                    <img src="/triumph.png" alt="Triumph!" />
                    </PositiveResult>
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

const PositiveResult = styled.div`
animation: ${animatePositiveResult} 0.3s ease-in;
animation-delay: (${props => (props.animationDelay -1)* 1 + props.secondDelay + props.thirdDelay})s;
animation-fill-mode: backwards;
`
const NegatedResultsPositive = styled.div`
animation: ${animatePositiveResult} 0.3s ease-in;
animation-delay: ${props => (props.animationDelay -1)* 1 + props.secondDelay + props.thirdDelay}s;
animation-fill-mode: backwards;
`
const NegatedResultsNegative = styled.div`
animation: ${animatePositiveResult} 0.3s ease-in;
animation-delay: ${props => (props.animationDelay -1)* 1 + 0.5 + props.secondDelay + props.thirdDelay}s;
animation-fill-mode: backwards;
`

//
