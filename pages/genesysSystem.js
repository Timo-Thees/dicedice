import styled, { keyframes } from "styled-components"
import { useState, useEffect, useCallback } from "react";
import { diceButtonTextArray } from "../components/diceButtonText";
import {rollResults} from "../components/rollResults";
import { FUImage } from "../components/designElements";
import GenesysResultOverlay from "../components/genesysResultOverlay";

export default function Genesys({setPage}){
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
    const [resultOverlay, setResultOverlay] = useState(false)
    const [testcase, setTestcase] = useState(false)
    
    const shutUpLinter = useCallback(()=> {
        return(
            [advantage, disadvantage, successes, failure, triumphs, disaster]
        )
    },[advantage, disadvantage, successes, failure, triumphs, disaster])

    useEffect(() => {
        const [advantage, disadvantage, successes, failure, triumphs, disaster] = shutUpLinter();
        rollResults(dice, setDice, advantage, setAdvantage, disadvantage, setDisadvantage, setAnimationDelayAdvantages, successes, setSuccesses, failure, setFailure, triumphs, setTriumphs, disaster, setDisaster, setAnimationDelaySuccesses, getRandomInteger)
    },  [dice, shutUpLinter])

    const rollDice = (event) =>{
        event.preventDefault();
    const yellow = (event.target.yellow.value === ""? 0 : event.target.yellow.value * 1)
    const green = (event.target.green.value === ""? 0 : event.target.green.value * 1)
    const blue = (event.target.blue.value === ""? 0 : event.target.blue.value * 1)
    const red = (event.target.red.value === ""? 0 : event.target.red.value * 1)
    const purple = (event.target.purple.value === ""? 0 : event.target.purple.value * 1)
    const black = (event.target.black.value === ""? 0 : event.target.black.value * 1)
        changeDiceText();
        setDice({yellow: yellow, green: green, blue: blue, red: red, purple: purple, black: black});
        setResultOverlay(true);
    }

    function resetDice(){
        setTriumphs([]);
        setSuccesses([]);
        setAdvantage([]);
        setDisadvantage([]);
        setFailure([]);
        setDisaster([]);
        setAnimationDelaySuccesses(0);
        setAnimationDelayAdvantages(0);
    }

    function getRandomInteger(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    useEffect(() => {
        function initiateDiceText(){
            setDiceButtonText(diceButtonTextArray[getRandomInteger(0, diceButtonTextArray.length)])
        }
        initiateDiceText()
    }, [])

    function changeDiceText(){
        setDiceButtonText(diceButtonTextArray[getRandomInteger(0, diceButtonTextArray.length)])
    }

    return(
        <div>
        <StatsEntry onSubmit={rollDice}>
            <OuterFlexbox>
                <InnerFlexbox>
                    <h4>Boni</h4>
                    <DiceFormWrapper>
                        <InnerFlexbox>
                            <FUImage width={30} src="/yellow_dice.png" alt="yellow d12"/>
                            <p>Gelb</p>
                            <input type="number" min="0" placeholder="0" name="yellow"></input>
                        </InnerFlexbox>
                        <InnerFlexbox>
                            <FUImage width={25} src="/green_dice.png" alt="green d8"/>
                            <p>Grün</p>
                            <input type="number" min="0" placeholder="0" name="green"></input>
                        </InnerFlexbox>
                        <InnerFlexbox>
                            <FUImage width={25} src="/blue_dice.png" alt="blue d6"/>
                            <p>Blau</p>
                            <input type="number" min="0" placeholder="0" name="blue"></input>
                        </InnerFlexbox>
                    </DiceFormWrapper>
                </InnerFlexbox>
                <InnerFlexbox>
                    <h4>Mali</h4>
                    <DiceFormWrapper>
                        <InnerFlexbox>
                            <FUImage width={30} src="/red_dice.png" alt="red d12"/>
                            <p>Rot</p>
                            <input type="number" min="0" placeholder="0" name="red"></input>
                        </InnerFlexbox>
                        <InnerFlexbox>
                            <FUImage width={25} src="/purple_dice.png" alt="purple d8"/>
                            <p>Lila</p>
                            <input type="number" min="0" placeholder="0" name="purple"></input>
                        </InnerFlexbox>
                        <InnerFlexbox>
                            <FUImage width={25} src="/black_dice.png" alt="black d6"/>
                            <p>Schwarz</p>
                            <input type="number" min="0" placeholder="0" name="black"></input>
                        </InnerFlexbox>
                    </DiceFormWrapper>
                </InnerFlexbox>
            </OuterFlexbox>
            <button onClick={()=> resetDice()}>{diceButtonText}</button>

        </StatsEntry>
       
        {resultOverlay===true ? <GenesysResultOverlay 
        setResultOverlay={setResultOverlay} advantage={advantage} disadvantage={disadvantage} successes={successes} failure={failure} triumphs={triumphs} disaster={disaster} animationDelayAdvantages={animationDelayAdvantages} animationDelaySuccesses={animationDelaySuccesses}/> : 
        <LastResultsOuterBox>
            <LastResultInnerBox>
                {advantage.map(result => {
                        if(result.negated === false){
                        return(
                            <ShowResults 
                                key={result.key}
                                animationDelay={0} 
                                secondDelay={0}
                                >
                                <NormalIcon src="/chance.png" alt="Advantage" />
                            </ShowResults>
                        )    
                        }
                    })}
            </LastResultInnerBox>
            <LastResultInnerBox>
                {disadvantage.map(result => {
                        if(result.negated === false){
                        return(
                            <ShowResults 
                                key={result.key}
                                animationDelay={0} 
                                secondDelay={0}
                                >
                                <NormalIcon src="/bedrohung.png" alt="Danger" />
                            </ShowResults>
                        )    
                        }
                    })}
            </LastResultInnerBox>
            <LastResultInnerBox>
                {successes.map(result => {
                        if(result.negated === false){
                        return(
                            <ShowResults 
                                key={result.key}
                                animationDelay={0} 
                                secondDelay={0}
                                >
                                <NormalIcon src="/erfolg.png" alt="Success" />
                            </ShowResults>
                        )    
                        }
                    })}
            </LastResultInnerBox>
            <LastResultInnerBox>
                {failure.map(result => {
                        if(result.negated === false){
                        return(
                            <ShowResults 
                                key={result.key}
                                animationDelay={0} 
                                secondDelay={0}
                                >
                                <NormalIcon src="/misserfolg.png" alt="Failure" />
                            </ShowResults>
                        )    
                        }
                    })}
            </LastResultInnerBox>
            <LastResultInnerBox>
                {triumphs.map(result => {
                        return(
                            <ShowResults 
                                key={result.key}
                                animationDelay={0} 
                                secondDelay={0}
                                >
                                <NormalIcon src="/triumph.png" alt="Triumph" />
                            </ShowResults>
                        )    
                        }
                    )}
            </LastResultInnerBox>
            <LastResultInnerBox>
                {disaster.map(result => {
                        return(
                            <ShowResults 
                                key={result.key}
                                animationDelay={0} 
                                secondDelay={0}
                                >
                                <NormalIcon src="/katastrophe.png" alt="disaster" />
                            </ShowResults>
                        )    
                        
                    })}
            </LastResultInnerBox>
            <button onClick={()=>setPage("home")}>Home</button>
        </LastResultsOuterBox>
        }
        </div>
    )
}

const StatsEntry = styled.form`
background-color:rgba(255,255,255,0.4);
display: flex;
flex-direction: column;
align-items: center;
margin: 20px;
padding: 20px;
border-radius: 20px;
`;

const OuterFlexbox = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 10px;
`;

const InnerFlexbox = styled.div`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
margin: 5px;
margin-bottom: 10px;
`;

const DiceFormWrapper = styled(InnerFlexbox)`
background-color:rgba(255,255,255,0.4);
border-radius: 20px;
padding: 8px;
`

const LastResultsOuterBox = styled.div`
background-color:rgba(255,255,255,0.4);
display: flex;
flex-direction: column;
align-items: center;
margin: 20px;
padding: 20px;
border-radius: 20px;
`
const LastResultInnerBox = styled.div`
display: flex;
flex-direction: row;
`

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
