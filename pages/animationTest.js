import styled, { keyframes } from "styled-components";
import { DSixAll } from "../components/svgComponents";
import { useState } from "react";
import { useEffect } from "react";

export default function AnimationTest({setPage}){
    const [diceNumber, setDiceNumber] = useState(1)
    const [diceColor, setDiceColor] = useState("red")
    const [diceAnimationArray, setDiceAnimationArray] = useState([])


    function getRandomInteger(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    function diceAnimation(){
        const temporaryArray = [];
       let countdown = 10;
        for(;countdown > 0;){
            if(temporaryArray.length === 0){
                temporaryArray.push({key: 1, animationDelay: 0, diceNumber: getRandomInteger(1, 7)})
                countdown = countdown -1
            } else {
                const lastDice = temporaryArray.pop()
                if (lastDice.diceNumber > 3){
                    const newDice = {key: lastDice.key+1, animationDelay: lastDice.animationDelay +1, diceNumber: getRandomInteger(1, lastDice.diceNumber)}
                    temporaryArray.push(lastDice)
                    temporaryArray.push(newDice)
                    countdown = countdown-1
                } else {
                    const newDice = {key: lastDice.key+1, animationDelay: lastDice.animationDelay +1, diceNumber: getRandomInteger(lastDice.diceNumber + 1, 7)}
                    temporaryArray.push(lastDice)
                    temporaryArray.push(newDice)
                    countdown = countdown-1
                }
                
            }
        }
        setDiceAnimationArray([...temporaryArray])
    }
    const handleTestAnimation = ()=>{
        setDiceAnimationArray([])
        diceAnimation()
    }
    return(
        <BackgroundAnimationTest>
            <Dialog>
                <ResultGlowupBox fill={diceColor}>
                    <DSixAllAnimated dice={diceNumber} width={50} height={50} fill={diceColor}/>
                </ResultGlowupBox>            
                <ButtonRow>
                    {diceAnimationArray.map(slide=>{
                        return(
                            <RollingDiceBox key={slide.key} animationDelay={slide.animationDelay} >
                                <DSixAll dice={slide.diceNumber} width={50} height={50} fill={diceColor}/>
                            </RollingDiceBox>)
                    })}
                </ButtonRow>
                <ButtonRow>
                    <button onClick={()=> setDiceNumber(1)}>1</button>
                    <button onClick={()=> setDiceNumber(2)}>2</button>
                    <button onClick={()=> setDiceNumber(3)}>3</button>
                    <button onClick={()=> setDiceNumber(4)}>4</button>
                    <button onClick={()=> setDiceNumber(5)}>5</button>
                    <button onClick={()=> setDiceNumber(6)}>6</button>
                </ButtonRow>
                <ButtonRow>
                    <button onClick={()=> setDiceColor("red")}>rot</button>
                    <button onClick={()=> setDiceColor("yellow")}>gelb</button>
                    <button onClick={()=> setDiceColor("green")}>grün</button>
                    <button onClick={()=> setDiceColor("blue")}>blau</button>
                </ButtonRow>
                <button onClick={handleTestAnimation}>Test Animation</button>
                <button onClick={() => setPage("home")}>Home</button>
            </Dialog>
            
        </BackgroundAnimationTest>
    )
}

const Dialog = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-radius: 0.75rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  max-width: 100%;
  width: 70vw;
  height: 40vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const BackgroundAnimationTest = styled.div`
background-color: #28304B;
height: 100%;
position: fixed;
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;
`
const ButtonRow = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const resultGlowupKeyframes = (fill) => keyframes`
0% {height: 50px; width: 50px; box-shadow: 0px 0px 0px 0px ${fill};}
35% {height: 60px; width: 60px; box-shadow: 0px 0px 20px 15px ${fill};}
100% {height: 49px; width: 49px; box-shadow: 0px 0px 10px 5px ${fill};}
`

const ResultGlowupBox = styled.div`
height: 49px;
width: 49px;
box-shadow: 0px 0px 10px 5px ${props => props.fill};
animation: ${props => resultGlowupKeyframes(props.fill)} 2s ease-out;
align-self: center;
border-radius: 0.75rem;
margin: 25px;
`
const rollingDiceAnimation = keyframes`
0% {background-color: blue;}
1% {background-color: red;}
99% {background-color: red;}
100% {background-color: yellow;}
`

const RollingDiceBox = styled.div`
animation: ${props => resultGlowupKeyframes(props.fill)} 2s ease-out;
animation-delay: ${props => props.animationDelay*0.5}s
animation-fill-mode: forwards;
`

const DSixAllAnimated = styled(DSixAll)`
animation: ${props => resultGlowupKeyframes(props.fill)} 2s ease-out;
animation-delay: ${props => props.animationDelay*0.5}s
animation-fill-mode: forwards;
`
//animation-delay: ${props => (props.animationDelay -1)* 1 + props.secondDelay + 10}s;