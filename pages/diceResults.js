import styled from "styled-components";

export default function DiceResultsOverlay({
    advantage, disadvantage, successes, failure, triumphs, disaster, setResultOverlay})
    { 
    const closeOverlay =()=> {
        setResultOverlay(false)
    } 
    return(
        <Overlay>
            <Dialog>
                <button onClick={closeOverlay}>Close Overlay</button>
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