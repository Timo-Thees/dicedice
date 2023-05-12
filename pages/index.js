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
        <div>
          <LogoBox>      
            <Logo src="/dicedice_logo.png"/>
            <LogoGlow></LogoGlow>
          </LogoBox>
      <Subheading>A TableTop RPG Helper</Subheading>
      <button onClick={()=> setPage("genesys")}>Genesys Würfel</button>
      <button onClick={()=> setPage("monster of the week")}>Monster of the Week</button>
      <button onClick={()=> setPage("under construction")}>Dungeon World</button>
      <button onClick={()=> setPage("oracle")}>Orakel</button>
      <button onClick={()=> setPage("under construction")}>NPC Generator</button>
      <button onClick={()=> setPage("under construction")}>Dungeon Generator</button>
      </div>) :(<></>)}
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
position: fixed;
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
width: 100%;
display: flex;
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
align-self: center;
animation: ${animateLogo} 2s ease-in;
animation-fill-mode: backwards;
z-index: 2;
object-position: 50% 50%;
`
const LogoGlow = styled.div`
width: 10px;
hight: 10px;
animation: ${animateLogo} 2s ease-in;
animation-fill-mode: backwards;
box-shadow: 0px 0px 20px 20px white;
object-position: 50% 50%;
`
const LogoBox = styled.div`
align-items: center;
align-content: center;
justify-content: center;
min-width: 30vw;
min-height: 30vh;
border-color: white;
border-width: 5px;
`