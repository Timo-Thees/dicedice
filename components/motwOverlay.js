import Heading from "./Heading";
import styled from "styled-components";
import { monsterOfTheWeekMoveList } from "./monsterOfTheWeekMovelist";

export default function MonsterOfTheWeekResultOverlay({diceResult, setResultOverlay}){
    const selectedMove = (monsterOfTheWeekMoveList[diceResult.selectedMove]===undefined?false:monsterOfTheWeekMoveList[diceResult.selectedMove])
    const totalResult = diceResult.firstDice + diceResult.secondDice + diceResult.modifier
    function getTooltipText(){
        if(selectedMove === false){
            return(
                "You selected no move. What was this supposed to be?" 
            )
        } else if(totalResult <= 6 && selectedMove.onFail === "Standart"){
            return(
                "Failure. Mark expirience and accept the consequences"
            )
        } else if(totalResult <= 6 && selectedMove.onFail !== "Standart") {
            return(
                selectedMove.onFail
            )

        } else if(totalResult >= 7 && totalResult <= 9){
            return(
                selectedMove.onMixed
            )
        } else if(totalResult >=10 && totalResult <= 11){
            return(
                selectedMove.onSuccsess
            )
        } else if(totalResult >=12 && diceResult.isAdvanced === true && totalResult.onAdvanced !== false){
            return(
                selectedMove.onAdvanced
            )
        } else if(totalResult >=12){
            return(
                selectedMove.onSuccsess
            )
        }
           
    }
    const tooltipText = getTooltipText()
    const closeOverlay = ()=>{
        setResultOverlay(false);
    }
    return(
        <Overlay>
            <Dialog>
                <Heading>{totalResult}</Heading>
                <h2>firstDice: {diceResult.firstDice}, secondDice: {diceResult.secondDice}, modifier: {diceResult.modifier}</h2>
                <h3>is Advanced: {diceResult.isAdvanced.toString()}</h3>
                <a>{tooltipText}</a>
                <button>Show total text</button>
                <button onClick={closeOverlay}>done</button>
            </Dialog>
        </Overlay>
    )
}

const Overlay = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.5;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 10;
`;

const Dialog = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-radius: 0.75rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  max-width: 100%;
  width: 70vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;