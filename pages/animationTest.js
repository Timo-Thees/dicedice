import styled, { keyframes } from "styled-components";

export default function AnimationTest({setPage}){
    return(
        <BackgroundAnimationTest>
            <Dialog>
                <button>Test Animation</button>
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
const resultGlowupKeyframes = keyframes`
0% {height: 50px; width: 50px; box-shadow: 0px 0px 0px 0px white;}
30% {height: 60px; width: 60px; box-shadow: 0px 0px 40px 25px white;}
100% {height: 50px; width: 50px; box-shadow: 0px 0px 10px 25px white;}
`