import Heading from "../components/Heading";
import styled, { keyframes } from "styled-components";
import Genesys from "./genesysSystem";
import Oracle from "./Oracle";
import { useState } from "react";
import MonsterOfTheWeek from "./MonsterOfTheWeek";

export default function Home() {
  const [page, setPage] = useState("home")
  return (
    <main>
      <Background>
      {page === "home" ? (      
        <BackgroundHomescreen>
          <LogoBox>      
            <Logo src="/dicedice_logo.png"/>
            <LogoGlow></LogoGlow>
          </LogoBox>
          <Subheading>A TableTop RPG Helper</Subheading>
          <StartMenue>
            <Button onClick={()=> setPage("genesys")}>Genesys System</Button>
            <Button onClick={()=> setPage("monster of the week")}>Monster of the Week</Button>
            <Button onClick={()=> setPage("under construction")}>Dungeon World</Button>
            <Button onClick={()=> setPage("oracle")}>Orakel</Button>
            <Button onClick={()=> setPage("under construction")}>NPC Generator</Button>
            <Button onClick={()=> setPage("under construction")}>Dungeon Generator</Button>
          </StartMenue>
        </BackgroundHomescreen>) :(<></>)}
      {page === "genesys" ? (<Genesys setPage={setPage}/>) : (<></>)}
      {page === "oracle" ? (<Oracle setPage={setPage}/>):(<></>)}
      {page === "monster of the week" ? (<MonsterOfTheWeek setPage={setPage}/>):(<></>)}
      {page === "under construction" ?(
        <div>
       <Heading>Under Construction</Heading>
      <Subheading>This option is not finished yet. Please come back at a later date</Subheading>
      <button onClick={()=> setPage("home")}>Home</button>
        </div>
      ) : (<></>)}
      </Background>
    </main>
  );
}

export const Subheading = styled.h3`
  text-align: center;
  color: white;
`;

const Background = styled.div`
background-color: #28304B;
height: 100%;
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
width: 100%;
`
const BackgroundHomescreen = styled.div`
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

const animateLogo = keyframes`
from {
    opacity: 0.0;
}
to {
    opacity: 1;
}
`

const Logo = styled.img`
position: absolute;
align-self: center;
animation: ${animateLogo} 2s ease-in;
animation-fill-mode: backwards;
z-index: 2;
object-position: 50% 50%;
`
const LogoGlow = styled.div`
position: absolute;
width: 160px;
height: 30px;
animation: ${animateLogo} 0.8s ease-in;
animation-delay: 1.5s;
animation-fill-mode: backwards;
background-color: white;
box-shadow: 0px 0px 60px 25px white;
object-position: 50% 50%;
`
const LogoBox = styled.div`
display: flex;
align-items: center;
align-content: center;
justify-content: center;
min-width: 30vw;
min-height: 20vh;
`
const animateStartMenue = keyframes`
0% {top: 150vh}
90% {top: 17vh}
100% {top: 25vh}
`

const StartMenue = styled.div`
background-color:rgba(255,255,255,0.4);
border-radius: 0.75rem;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;
z-index: 4;
position: absolute;
top: 25vh;
max-width: 100%;
width: 50vw;
min-height: 50vh;
padding: 20px;
animation: ${animateStartMenue} 2s ease-in;
animation-delay: 2.6s;
animation-fill-mode: backwards;
`

const Button = styled.button`
`