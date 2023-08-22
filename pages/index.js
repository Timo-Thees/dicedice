import Heading from "../components/Heading";
import styled, { keyframes } from "styled-components";
import Genesys from "./genesysSystem";
import Oracle from "./Oracle";
import { useState, useEffect } from "react";
import MonsterOfTheWeek from "./MonsterOfTheWeek";
import { Button, Subheading } from "../components/designElements";

export default function Home() {
  const [page, setPage] = useState("home")
  const [startMenue, setStartMenue] = useState("finished")
  const [openingAnimation, setOpeningAnimation] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{setOpeningAnimation(false)},5000)
  } ,[])

  return (
    <Main>
      {page === "home" ? (
        <BackgroundHomescreen>
          {openingAnimation === true ? (
            <ClickToStopAnimation onClick={()=>setOpeningAnimation(false)}>
            <LogoBox>      
              <LogoAnimated src="/dicedice_logo.png" />
              <LogoGlowAnimated />
            </LogoBox>
            <LogoSubheadingAnimated>A TableTop RPG Helper</LogoSubheadingAnimated>
            <StartMenueAnimated>
              {startMenue === "finished" ? (
                <ButtonBox>
                <Button onClick={()=> setPage("genesys")}>Genesys System</Button>
                <Button onClick={()=> setStartMenue("unfinished")}>Show Unfinished Projects</Button>
                </ButtonBox>
              ) : (
                <ButtonBox>
                <Button onClick={()=> setPage("monster of the week")}>Monster of the Week</Button>
                <Button onClick={()=> setPage("under construction")}>Dungeon World</Button>
                <Button onClick={()=> setPage("oracle")}>Orakel</Button>
                <Button onClick={()=> setPage("under construction")}>NPC Generator</Button>
                <Button onClick={()=> setPage("under construction")}>Dungeon Generator</Button>
                <Button onClick={()=> setStartMenue("finished")}>return</Button>
                </ButtonBox>
              )}
              

            </StartMenueAnimated>
            </ClickToStopAnimation>
           ) : (
            <div>
            <LogoBox>      
              <Logo src="/dicedice_logo.png" />
              <LogoGlow ></LogoGlow>
            </LogoBox>
            <LogoSubheading>A TableTop RPG Helper</LogoSubheading>
            <StartMenue>
            {startMenue === "finished" ? (
                <ButtonBox>
                <Button onClick={()=> setPage("genesys")}>Genesys System</Button>
                <Button onClick={()=> setStartMenue("unfinished")}>Show Unfinished Projects</Button>
                </ButtonBox>
              ) : (
                <ButtonBox>
                <Button onClick={()=> setPage("monster of the week")}>Monster of the Week</Button>
                <Button onClick={()=> setPage("under construction")}>Dungeon World</Button>
                <Button onClick={()=> setPage("oracle")}>Orakel</Button>
                <Button onClick={()=> setPage("under construction")}>NPC Generator</Button>
                <Button onClick={()=> setPage("under construction")}>Dungeon Generator</Button>
                <Button onClick={()=> setStartMenue("finished")}>return</Button>
                </ButtonBox>
              )}
            </StartMenue>
            </div>
           )}

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
    </Main>
  );
}

const Main = styled.main`
background-color: #28304B;
margin: 0;
padding: 0;
min-height: 100vh;
min-width: 100vw;
top: 0px;
padding-top: 5;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
`
/* const Background = styled.div`
background-color: #28304B;
margin: 0;
padding: 0;
min-height: 100vh;
min-width: 100vw;
top: 0px;
`*/

const BackgroundHomescreen = styled.div`
height: 100%;
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
`

const ClickToStopAnimation = styled.div`
height: 100%;
position: fixed;
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
width: 100%;
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
z-index: 2;
object-position: 25% 50%;
`
const LogoAnimated = styled(Logo)`
animation: ${animateLogo} 2s ease-in;
animation-fill-mode: backwards;
`

const LogoSubheading = styled.h3`
text-align: center;
color: white;
`
const LogoSubheadingAnimated = styled(LogoSubheading)`
animation: ${animateLogo} 1s ease-in;
animation-delay: 2.5s;
animation-fill-mode: backwards;
`

const LogoGlow = styled.div`
position: absolute;
width: 160px;
height: 30px;
background-color: white;
box-shadow: 0px 0px 60px 25px white;
object-position: 25% 50%;
`

const LogoGlowAnimated = styled(LogoGlow)`
animation: ${animateLogo} 0.8s ease-in;
animation-delay: 1.5s;
animation-fill-mode: backwards;
`

const LogoBox = styled.div`
display: flex;
align-items: center;
align-content: center;
justify-content: center;
min-width: 30vw;
min-height: 20vh;
margin-top: 10vh;
`

const animateStartMenue = keyframes`
0% {top: 150vh}
85% {top: 30vh}
92% {top: 44vh}
98% {top: 41vh}
100% {top: 40vh}
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
top: 40vh;
left: 25vw;
max-width: 100%;
width: 50vw;
min-height: 30vh;
padding: 20px;
`
const StartMenueAnimated = styled(StartMenue)`
animation: ${animateStartMenue} 1.5s linear;
animation-delay: 3.6s;
animation-fill-mode: backwards;
`
const ButtonBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;
`