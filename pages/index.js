import Heading from "../components/Heading";
import styled from "styled-components";
import Genesys from "./genesysSystem";
import Oracle from "./Oracle";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home")
  return (
    <main>
      {page === "home" ? (      
        <div>
      <Heading>DiceDice</Heading>
      <Subheading>My silly little TTRPG dice helper</Subheading>
      <button onClick={()=> setPage("genesys")}>Genesys Würfel</button>
      <button onClick={()=> setPage("under construction")}>Monster of the Week</button>
      <button onClick={()=> setPage("under construction")}>Dungeon World</button>
      <button onClick={()=> setPage("oracle")}>Orakel</button>
      <button onClick={()=> setPage("under construction")}>NPC Generator</button>
      <button onClick={()=> setPage("under construction")}>Dungeon Generator</button>
      </div>) :(<></>)}
      {page === "genesys" ? (<Genesys setPage={setPage}/>) : (<></>)}
      {page === "oracle" ? (<Oracle setPage={setPage}/>):(<></>)}
      {page === "under construction" ?(
        <div>
       <Heading>Under Construction</Heading>
      <Subheading>This option is not finished yet. Please come back at a later date</Subheading>
      <button onClick={()=> setPage("home")}>Home</button>
        </div>
      ) : (<></>)}

    </main>
  );
}

export const Subheading = styled.h3`
  text-align: center;
`;
